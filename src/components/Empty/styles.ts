import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: themes.gray400,
    borderTopWidth: 1,
  },
  image: {
    marginBottom: 16,
  },
  textBold: {
    fontSize: themes.md,
    fontFamily: themes.bold,
    color: themes.gray300,
  },
  textRegular: {
    fontFamily: themes.regular,
    color: themes.gray300,
  },
});
