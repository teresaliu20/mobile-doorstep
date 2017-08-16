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
import styles from '../assets/stylesheets/itemStyles.js';

class Item extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.naviation.navigate()}>
        <Image
          style={styles.itemImage}
          source={{uri: 'https://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg'}}
        />
        <Text style={styles.itemTitle}>ITEM NAME</Text>
      </TouchableOpacity>
    )
  }
}

export default Item;