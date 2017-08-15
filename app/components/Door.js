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
import styles from '../assets/stylesheets/doorStyles.js';

class Door extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.naviation.navigate()}>
        <Text style={styles.title}>COMMUNITY NAME</Text>
        <Text style={styles.description}>Description</Text>
      </TouchableOpacity>
    )
  }
}

export default Door;