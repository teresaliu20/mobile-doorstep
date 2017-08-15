import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import styles from '../assets/stylesheets/userProfileStyles.js';
import Door from '../components/Door';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.splash}>
          <Text style={styles.name}>INSERT NAME</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userDescription}>Description</Text>
          <View style={styles.statBox}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statDescription}>Given</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statDescription}>Given</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statDescription}>Given</Text>
            </View>
          </View>
        </View>
        <View style={styles.commmunityList}>
          <Door />
          <Door />
          <Door />
        </View>
      </ScrollView>
    )
  }
}

export default UserProfile;