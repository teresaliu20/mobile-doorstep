import React from 'react';
import axios from 'axios';
import domain from '../domain';
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

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
      phone: '',
      usernameArray: []
    }
  }

  componentDidMount() {
    axios.get(domain + '/api/users')
    .then((resp) => {
      console.log("ALL USERNAMES RETRIEVED");
      var allUsernames = resp.data.users.map((user) => user.username);
      this.setState({usernameArray: allUsernames});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  validateUsername(){
    var usernameArray = this.state.usernameArray;
    if (usernameArray.indexOf(this.state.username) === -1 && this.state.username.trim(' ') !== '') {
      return true;
    } else if (this.state.username.trim(' ') === '') {
      alert('Username is required');
      return false;
    } else  {
      alert('Username already exists');
      return false;
    }
  }

  validatePassword(){
    if (this.state.password !== this.state.passwordRepeat){
      return false;
    } else {
      return true;
    }
  }

  registerUser() {
    if (!this.validateUsername() || !this.validatePassword()){
      console.log("UNSUCCESSFUL REGISTRATION");
    } else {

      console.log("ABOUT TO REGISTER USER");
      const register = {
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        phone: this.state.phone
      }
      axios.post(domain + '/api/auth/register', register)
      .then((respJson) => {
        if (respJson.data.success){
          console.log("SUCCESSFUL REGISTRATION, REDIRECT TO LOGIN");
          this.props.navigation.navigate('Login');
        }
      })
      .catch((error) => {
        console.log("REGISTRATION ERROR", error);
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="First Name"
              value={this.state.fName}
              onChangeText={ ( text ) => this.setState( { fName: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="Last Name"
              value={this.state.lName}
              onChangeText={ ( text ) => this.setState( { lName: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={this.state.email}
              onChangeText={ ( text ) => this.setState( { email: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="Username"
              value={this.state.username}
              onChangeText={ ( text ) => this.setState( { username: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Password"
              value={this.state.password}
              onChangeText={ ( text ) => this.setState( { password: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              secureTextEntry={ true }
              placeholder="Repeat Password"
              onChangeText={ ( text ) => this.setState( { passwordRepeat: text } ) }
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.textInput}
              placeholder="Cellphone Number"
              value={this.state.phone}
              onChangeText={ ( text ) => this.setState( { phone: text } ) }
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={ () => this.registerUser() }>
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

export default Radium(RegisterScreen);
