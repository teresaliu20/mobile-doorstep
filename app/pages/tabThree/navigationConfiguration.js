'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import SearchCommunities from './views/SearchCommunities'
import TabThreeScreenTwo from './views/TabThreeScreenTwo'
import TabThreeScreenThree from './views/TabThreeScreenThree'

const routeConfiguration = {
  TabThreeScreenOne: { screen: SearchCommunities },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
  TabThreeScreenThree: { screen: TabThreeScreenThree },

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
