/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,findNodeHandle,UIManager} from 'react-native';
import HelloWorldView from './HelloWorldNativeView';
import HelloWorldModule from './HelloWorldNativeModule';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    nativeModuleText: null,
    nativeModuleUIText: "haha",
    i: 0,
    mapViewHandle:null
  }
  componentWillMount(){
    HelloWorldModule.emitter.addListener('EXAMPLE_EVENT',({greeting})=>{
      this.setState(()=>({nativeModuleText:greeting}))
    })
    HelloWorldView.emitter.addListener('EXAMPLE_EVENT2',({greeting})=>{
      this.setState(()=>({nativeModuleUIText:greeting}))
    })
  }
  componentDidMount() {
    this.setState({mapViewHandle:findNodeHandle(this.mapViewRef)})
}
  componentWillUnmount(){
    HelloWorldModule.emitter.remove()
    HelloWorldView.emitter.remove()
  }
  onPress = ()=>{
    HelloWorldModule.exampleMethod();
  }
  onPressUI=()=>{
    UIManager.dispatchViewManagerCommand(this.state.mapViewHandle, 0, null);
    //this.setState({nativeModuleUIText:"success"});
    //HelloWorldView.exampleMethod();
  }
  center() {
    UIManager.dispatchViewManagerCommand(this.state.mapViewHandle, 0, null);
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native4!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={this.onPressUI}>
        <HelloWorldView ref={(mv) => this.mapViewRef = mv}  style={styles.squre} exampleProp={this.state.nativeModuleUIText}></HelloWorldView>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress}>
        <Text>click me</Text>
        </TouchableOpacity>
        <Text>{this.state.nativeModuleText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 squre: {
   height:100,
   width:200
 }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
