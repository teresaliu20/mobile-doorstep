import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkNavy,
    padding: 10
  },
  itemImage: {
    height: 60,
    width: win.width
  }
});

export default styles;