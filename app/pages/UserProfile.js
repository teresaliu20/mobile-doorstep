import React from 'react';
import Reactotron from 'reactotron';
import { connect } from 'react-redux';
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
  componentWillMount() {
    Reactotron.log("USER UP AND RUNNING", this.props.user);
  }
  render() {
    const user = this.props.user;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.splash}>
          <Text style={styles.name}>{user.fName + ' ' + user.lName}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userDescription}>{user.aboutMe}</Text>
          <View style={styles.statBox}>
            {/* {user.stats.map((stat, index) =>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{stat}</Text>
                <Text style={styles.statDescription}>Given</Text>
              </View>
            )} */}
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

const mapStateToProps = ( state ) => {
  return {
    user: state.user.user
  }
}

export default connect(
  mapStateToProps
)(UserProfile);
