'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabTwo } from '../navigationConfiguration'
import { Image } from 'react-native'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabTwo
  }
}
class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Two',
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabTwo
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabTwoNavigation)
