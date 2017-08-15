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
    this.state = {
      username: '',
      password: ''
    }
  }
  loginUser(username, password) {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="First Name"
              onChangeText={ ( text ) => this.setState( { username: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Last Name"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Email"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Username"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Password"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Repeat Password"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Cellphone Number"
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonLabel, {fontFamily: 'Avenir'}]}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.button, styles.red]} onPress={ () => this.props.navigation.navigate('Login') }>
              <Text style={[styles.buttonLabel, {fontFamily: 'Avenir'}]}>Cancel</Text>
          </TouchableOpacity>
        </View>  
      </View>
    )
  }
}

export default Radium(LoginScreen);