import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
  },
  requestTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkNavy,
    padding: 10
  }
});

export default styles;