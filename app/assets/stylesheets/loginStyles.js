import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightestBlue
  },
  inputWrapper: {
    paddingHorizontal: 10,
    width: win.width,
    margin: 5
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.darkNavy,
    margin: 20
  },
  textInput: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 16,
    color: colors.darkNavy
  },
  buttonWrapper: {
    paddingHorizontal: 10,
    width: win.width,
    margin: 5
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.sorbetOrange,
    borderRadius: 5
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  red: {
    backgroundColor: colors.red
  }
});

export default styles;