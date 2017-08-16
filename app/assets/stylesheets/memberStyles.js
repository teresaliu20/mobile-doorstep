import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: win.width,
    borderTopColor: colors.gray,
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  imageWrapper: {
    height: 90,
    width: 90
  },
  memberImage: {
    height: 90,
    width: 90
  },
  memberInfo: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkNavy,
    padding: 10,
    flex: 1
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
});

export default styles;