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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 175,
    height: 45
  },
  buttonText: {
    fontSize: themes.md,
    fontFamily: themes.bold,
  },
  buttonBlue: {
    borderColor: themes.blue,
  },
  buttonPurple: {
    borderColor: themes.purple,
  },
  buttonBlueDark: {
    borderColor: themes.blueDark,
  },
  buttonPurpleDark: {
    borderColor: themes.purpleDark,
  },
  buttonTextBlue: {
    color: themes.blue,
  },
  buttonTextPurple: {
    color: themes.purple,
  },
  buttonTextBlueDark: {
    color: themes.blueDark,
  },
  buttonTextPurpleDark: {
    color: themes.purpleDark,
  },
  containerAllTasks:{
    flexDirection: 'row', 
    gap: 10
  },
  allTasks:{
    fontFamily: themes.bold,
    color: themes.blue,
    marginBottom: 20,
  },
  counterContainer: {
    width: 25,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: themes.gray400,
  },
  counterTasks: {
    fontSize: themes.sm,
    fontFamily: themes.bold,
    color: themes.gray200,
    textAlign: 'center',
  },
});