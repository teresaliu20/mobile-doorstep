'use strict';

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
import styles from '../../../assets/stylesheets/communityProfileStyles.js';
import Member from '../../../components/Member';

class CommunityProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.splash}>
          <Text style={styles.communityName}>The OG GFs</Text>
          <Text style={styles.marketLabel}>COMMUNITY MARKET</Text>
          <Text style={styles.communityDescription}>Description</Text>
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
        <View style={styles.membersView}>
          <Text style={styles.membersLabel}>MEMBERS</Text>
          <Member />
          <Member />
          <Member />
          <Member />
        </View>
      </ScrollView>
    )
  }
}

export default CommunityProfile;