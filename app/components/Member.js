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
import styles from '../assets/stylesheets/memberStyles.js';

class Member extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.naviation.navigate()}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.memberImage}
            source={{uri: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg'}}
          />
        </View>
        <View style={styles.memberInfo}>
          <Text style={styles.memberTitle}>FIRST LAST</Text>
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
      </TouchableOpacity>
    )
  }
}

export default Member;