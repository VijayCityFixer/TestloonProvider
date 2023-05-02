import { Text, View } from 'react-native'
import React, { Component } from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import SplashScreen from './src/blocks/SplashScreen'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
     <StackNavigation />
    )
  }
}