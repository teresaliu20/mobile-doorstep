import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  AsyncStorage,
  ActivityIndicator,
  Image
} from 'react-native';
import styles from '../assets/stylesheets/loginStyles.js';
import Radium from 'radium';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}

export default Radium(LoginScreen);