//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent, NativeEventEmitter,StyleSheet  } from 'react-native'
import PropTypes from 'prop-types';

const HelloWorld = requireNativeComponent('HelloWorld', HelloWorldView)
const HelloWorldEmitter = new NativeEventEmitter(HelloWorld); 
export default class HelloWorldView extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event: Event) {
    if (!this.props.onChangeMessage) {
      return;
    }
    this.props.onChangeMessage(event.nativeEvent.message);
  }
  static  emitter = HelloWorldEmitter
  static exampleMethod () {
    console.log("exampleMethod invoke")
    return HelloWorld.exampleMethod()
  }
  render () {
    return <HelloWorld {...this.props}  onChange={this._onChange} style={styles.squre}/>
  }
}
const styles = StyleSheet.create({
  squre: {
    height:100,
    width:200
  }, 
})
HelloWorldView.propTypes = {
  exampleProp: PropTypes.any
}
