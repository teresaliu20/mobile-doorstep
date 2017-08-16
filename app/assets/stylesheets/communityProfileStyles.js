import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    width: win.width,
    backgroundColor: colors.burntOrange,
  },
  communityName: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 80
  },
  marketLabel: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 20
  },
  communityDescription: {
    paddingBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
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
    color: 'white'
  },
  statDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 20
  },
  membersView: {
    paddingTop: 10,
    backgroundColor: 'white',
  },
  membersLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },
});

export default styles;