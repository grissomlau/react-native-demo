//  Created by react-native-create-bridge

import { NativeModules, NativeEventEmitter  } from 'react-native'

const { HelloWorld } = NativeModules
const HelloWorldEmitter = new NativeEventEmitter(HelloWorld); 
export default {
  exampleMethod () {
    return HelloWorld.exampleMethod()
  },
  emitter: HelloWorldEmitter,
  EXAMPLE_CONSTANT: HelloWorld.EXAMPLE_CONSTANT
}
