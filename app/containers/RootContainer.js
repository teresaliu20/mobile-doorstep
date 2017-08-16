import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import UserProfile from '../pages/UserProfile';

const Navigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  UserProfile: {
    screen: UserProfile
  }
}, {
  initialRouteName: 'Login'
})

export default function RootContainer({ store }) {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
          <Navigator />
      </View>
    </Provider>
  );
}

RootContainer.propTypes = {
  store: PropTypes.object.isRequired
};
