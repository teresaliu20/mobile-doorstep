import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';
import styles from '../assets/stylesheets/requestStyles.js';

class Request extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.naviation.navigate()}>
        <Text style={styles.requestTitle}>REQUEST NAME</Text>
      </TouchableOpacity>
    )
  }
}

export default Request;