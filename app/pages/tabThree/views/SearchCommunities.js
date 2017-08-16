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
import styles from '../../../assets/stylesheets/searchCommunitiesStyles.js';
import Door from '../../../components/Door';

class SearchCommunities extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.splash}>
          <Text style={styles.name}>SEARCH COMMUNITIES</Text>
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

export default SearchCommunities;