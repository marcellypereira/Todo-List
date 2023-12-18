import { StyleSheet } from 'react-native';

import { THEMES } from '../../THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.gray600,
  },
  tasksContainer: {
    flex: 1,

    marginTop: 55,
    marginHorizontal: 24,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tasksCreated: {
    color: THEMES.blue,

    fontSize: THEMES.md,
    fontFamily: THEMES.bold,
  },
  tasksDone: {
    color: THEMES.purple,

    fontSize: THEMES.md,
    fontFamily: THEMES.bold,
  },
  counterContainer: {
    width: 25,
    height: 19,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 8,

    borderRadius: 999,

    backgroundColor: THEMES.gray400,
  },
  counterTasks: {
    fontSize: THEMES.sm,
    fontFamily: THEMES.bold,

    color: THEMES.gray200,
  },
});
