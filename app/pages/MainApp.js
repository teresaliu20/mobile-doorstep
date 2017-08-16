'use strict'
import React from 'react'
import { View,Text } from 'react-native'
import TabBarNavigation from './tabBar/views/TabBarNavigation'


class MainApp extends React.Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <TabBarNavigation />
      </View>
    )
  }
}

export default MainApp;