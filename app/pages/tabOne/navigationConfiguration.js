'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import UserProfile from './views/UserProfile'
import CommunityMarket from './views/CommunityMarket'

const routeConfiguration = {
  TabOneScreenOne: { screen: UserProfile },
  TabOneScreenTwo: { screen: CommunityMarket },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenTwo'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
