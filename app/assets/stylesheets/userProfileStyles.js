import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    width: win.width,
    backgroundColor: colors.lightestBlue,
  },
  name: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 40,
    paddingTop: 80
  },
  userInfo: {
    padding: 30,
    width: win.width,
    backgroundColor: 'white'
  },
  userDescription: {
    paddingBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: colors.darkNavy
  },
  statBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stat: {
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.darkNavy
  },
  statDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.darkNavy
  },
  communityList: {
    width: win.width,
    paddingVertical: 20
  }
});

export default styles;