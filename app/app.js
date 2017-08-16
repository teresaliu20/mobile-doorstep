import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootContainer from './containers/RootContainer';
import { configureStore } from './store/configureStore';
// import { persistStore } from 'redux-persist';

const store = configureStore();

// persistStore(store);

export default class mobileDoorstep extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <RootContainer store={store} />
      </View>
    );
  }
}
