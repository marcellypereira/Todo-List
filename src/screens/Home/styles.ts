import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksContainer: {
    flex: 1,
    marginTop: 55,
    width: 327,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 12
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tasksCreated: {
    color: themes.blue,
    fontSize: themes.sm,
    textTransform: 'uppercase',
  },
  tasksDone: {
    color: themes.purple,
    fontSize: themes.sm,
    textTransform: 'uppercase',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 35,
    backgroundColor: '#202024',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: themes.md,
  },
  buttonBlue: {
    borderColor: themes.blue,
    borderWidth: 2,
  },
  buttonPurple: {
    borderColor: themes.purple,
    borderWidth: 2,
  },
  buttonBlueDark: {
    borderColor: themes.blueDark,
  },
  buttonPurpleDark: {
    borderColor: themes.purpleDark,
  },
  buttonTextBlue: {
    color: themes.blue,
    fontFamily: themes.bold,
  },
  buttonTextPurple: {
    color: themes.purple,
    fontFamily: themes.bold,
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