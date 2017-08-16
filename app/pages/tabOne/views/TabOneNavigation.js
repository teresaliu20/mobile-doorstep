'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from '../navigationConfiguration'
import { Image } from 'react-native'
// Redux
import { connect } from 'react-redux'

// Icon
// import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne
  }
}

class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOne
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
export default connect(mapStateToProps)(TabOneNavigation)
