import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    width: win.width,
    backgroundColor: colors.sorbetOrange,
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
  requestsView: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderBottomWidth: 4,
    borderBottomColor: colors.gray
  },
  requestsLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },
  marketItemsView: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderBottomWidth: 4,
    borderBottomColor: colors.gray
  },
  marketItemsLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },
  userItemsView: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderBottomWidth: 4,
    borderBottomColor: colors.gray
  },
  userItemsLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },
  itemsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default styles;