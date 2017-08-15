import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const Navigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
}, {
  initialRouteName: 'Login'
})

export default function RootContainer({ store }) {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Navigator />
      </View>
    </Provider>
  );
}

RootContainer.propTypes = {
  store: PropTypes.object.isRequired
};
