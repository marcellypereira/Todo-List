import { StyleSheet } from 'react-native';

import { THEMES } from '../../THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',

    width: '100%',

    paddingVertical: 48,
    paddingHorizontal: 20,

    borderTopColor: THEMES.gray400,
    borderTopWidth: 1,
  },
  image: {
    marginBottom: 16,
  },
  textBold: {
    fontSize: THEMES.md,
    fontFamily: THEMES.bold,

    color: THEMES.gray300,
  },
  textRegular: {
    fontFamily: THEMES.regular,
  },
});
