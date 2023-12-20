import { StyleSheet } from 'react-native';

import { themes } from '../../themes';

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
    borderColor: themes.gray400,
    backgroundColor: themes.gray500,
  },
  textContainer: {
    width: '80%',
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  textCreated: {
    fontSize: themes.md,
    color: themes.gray100,
    textDecorationLine: 'none',
  },
  textDone: {
    fontSize: themes.md,
    color: themes.gray300,
    textDecorationLine: 'line-through',
  },
  circleCheck: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: themes.purple,
    backgroundColor: themes.purple,
  },
  circleEmpty: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: themes.blue,
  },
});
