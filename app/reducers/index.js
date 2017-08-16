import { combineReducers } from 'redux';
import userReducer from './userReducer';
import allCommunitiesReducer from './allCommunitiesReducer';
import oneCommunityReducer from './oneCommunityReducer';
import usersCommunitiesReducer from './usersCommunitiesReducer';
import postCreateCommunityReducer from './postCreateCommunityReducer';
import allUsersReducer from './allUsersReducer';
import commUsersReducer from './commUsersReducer';
import requestsReducer from './requestsReducer';

import { NavigatorTabOne } from '../pages/tabOne/navigationConfiguration';
import { NavigatorTabTwo } from '../pages/tabTwo/navigationConfiguration';
import { NavigatorTabThree } from '../pages/tabThree/navigationConfiguration';
import { TabBar, tabBarReducer } from '../pages/tabBar/navigationConfiguration';

const appReducer = combineReducers({
  tabBar: tabBarReducer,
  tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
  tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),
  tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
  user: userReducer,
  allCommunities: allCommunitiesReducer,
  currentComm: oneCommunityReducer,
  commUsers: commUsersReducer,
  usersCommunities: usersCommunitiesReducer,
  createCommunityStatus: postCreateCommunityReducer,
  allUsers: allUsersReducer,
  requests: requestsReducer
});

export default appReducer;
