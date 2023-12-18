import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.gray600,
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
    color: themes.blue,
    fontSize: themes.md,
    fontFamily: themes.bold,
  },
  tasksDone: {
    color: themes.purple,
    fontSize: themes.md,
    fontFamily: themes.bold,
  },
  counterContainer: {
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 999,
    backgroundColor: themes.gray400,
  },
  counterTasks: {
    fontSize: themes.sm,
    fontFamily: themes.bold,
    color: themes.gray200,
  },
});
