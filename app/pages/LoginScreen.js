import React from 'react';
import Reactotron from 'reactotron';
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
import { connect } from 'react-redux';

import { saveUser } from '../actions/saveUser';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  loginUser(username, password) {
    this.props.onSuccessfulLogin(username, password);
    Reactotron.log("SUCCESSFUL LOGIN YO");
    this.props.navigation.navigate( 'UserProfile', { admin: false } )
  }
  render() {
    Reactotron.log("HELLO");
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Doorstep</Text>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="Enter your username"
              onChangeText={ ( text ) => this.setState( { username: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Enter your password"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={ () => this.loginUser( this.state.username, this.state.password ) }>
              <Text style={[styles.buttonLabel, {fontFamily: 'Avenir'}]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.button, styles.red]} onPress={ () => this.props.navigation.navigate( 'Register', { admin: false } ) }>
              <Text style={[styles.buttonLabel, {fontFamily: 'Avenir'}]}>Register User</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onSuccessfulLogin: ( username, password ) => {
      dispatch(saveUser(username, password));
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Radium(LoginScreen));
