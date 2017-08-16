'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import UserProfile from './views/UserProfile'
import CommunityMarket from './views/CommunityMarket'
import CommunityProfile from './views/CommunityProfile'

const routeConfiguration = {
  TabOneScreenOne: { screen: UserProfile },
  TabOneScreenTwo: { screen: CommunityMarket },
  TabOneScreenThree: { screen: CommunityProfile }
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenThree'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
