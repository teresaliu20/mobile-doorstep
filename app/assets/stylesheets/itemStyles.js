import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    width: win.width/3,
    borderColor: 'white',
    borderWidth: 1
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkNavy,
    padding: 10
  },
  itemImage: {
    height: win.width/3,
    width: win.width/3
  }
});

export default styles;