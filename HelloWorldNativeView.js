//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types';

const HelloWorld = requireNativeComponent('HelloWorld', HelloWorldView)

export default class HelloWorldView extends Component {
  render () {
    return <HelloWorld {...this.props} />
  }
}

HelloWorldView.propTypes = {
  exampleProp: PropTypes.any
}
