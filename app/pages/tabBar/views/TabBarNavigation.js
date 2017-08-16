'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'
import { View, Text } from 'react-native' 
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
    navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {
  render(){
    const { dispatch, navigationState } = this.props
    return (
      <View style={{flex: 1}}>
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
      </View>
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
