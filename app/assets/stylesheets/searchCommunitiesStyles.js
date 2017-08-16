import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    width: win.width,
    backgroundColor: colors.lightBlue,
  },
  name: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 40,
    paddingTop: 80
  },
  communityList: {
    width: win.width,
    paddingVertical: 20
  }
});

export default styles;