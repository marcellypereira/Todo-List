import { StyleSheet } from 'react-native';

import { THEMES } from '../../THEMES';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 173,

    position: 'relative',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEMES.gray700,
  },
  form: {
    width: '100%',
    height: 54,

    position: 'absolute',

    bottom: -54 / 2,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: '75%',

    marginRight: 4,

    padding: 16,

    borderRadius: 5,
    borderWidth: 1,

    fontSize: THEMES.md,

    color: THEMES.gray100,

    backgroundColor: THEMES.gray500,
  },
  buttonInput: {
    width: 54,
    height: 54,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,

    backgroundColor: THEMES.blueDark,
  },
});
