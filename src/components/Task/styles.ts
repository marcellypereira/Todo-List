import { StyleSheet } from 'react-native';

import { THEMES } from '../../THEMES';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: 4,

    paddingHorizontal: 12,
    paddingVertical: 20,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: THEMES.gray400,

    backgroundColor: THEMES.gray500,
  },
  textContainer: {
    width: '80%',
    height: 40,

    alignContent: 'center',
    justifyContent: 'center',

    marginHorizontal: 8,
  },
  textCreated: {
    fontSize: THEMES.md,
    color: THEMES.gray100,
    textDecorationLine: 'none',
  },
  textDone: {
    fontSize: THEMES.md,
    color: THEMES.gray300,
    textDecorationLine: 'line-through',
  },
  circleCheck: {
    width: 20,
    height: 20,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 12,
    borderWidth: 2,
    borderColor: THEMES.purple,

    backgroundColor: THEMES.purple,
  },
  circleEmpty: {
    width: 20,
    height: 20,

    borderRadius: 12,
    borderWidth: 2,
    borderColor: THEMES.blue,
  },
});
