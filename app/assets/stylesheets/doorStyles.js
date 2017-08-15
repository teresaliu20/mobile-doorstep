import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: win.width,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 10,
    borderTopColor: colors.burntOrange,
    borderBottomWidth: 10,
    borderBottomColor: colors.sorbetOrange,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkNavy
  },
  description: {
    fontSize: 14,
    padding: 5,
    color: colors.darkNavy
  }
});

export default styles;