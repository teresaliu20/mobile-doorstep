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
import styles from '../../../assets/stylesheets/communityMarketStyles.js';
import Door from '../../../components/Door';
import Item from '../../../components/Item';
import Request from '../../../components/Request';


class CommunityMarket extends React.Component {
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
        </View>
        <View style={styles.requestsView}>
          <Text style={styles.requestsLabel}>Requests</Text>
          <Request />
        </View>
        <View style={styles.marketItemsView}>
          <Text style={styles.marketItemsLabel}>Market Items</Text>
          <Item />
          <Item />
        </View>
        <View style={styles.userItemsView}>
          <Text style={styles.userItemsLabel}>Your Items</Text>
          <Item />
          <Item />
        </View>
      </ScrollView>
    )
  }
}

export default CommunityMarket;