import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: themes.gray400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: themes.gray600,
    width: 350,
    height: 589,
    padding: 23,
    gap: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  taskContainer: {
    backgroundColor: themes.gray800,
    padding: 10,
    borderRadius: 5
  },
  task:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',

  },
  clipboard: {
    width: 20,
    height: 20,
    tintColor: themes.gray300,
  },
  ImageIcon:{
    width: 20,
    height: 20,
    fill: themes.gray300,
  },
  ImageUpload:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20
  },
  textTasks: {
    fontSize: themes.lg,
    alignItems: 'center',
    justifyContent: 'center',
    color: themes.gray300,
  },
  iconEdit: {
    fill: themes.gray300,
    marginRight: -5,
  },  
  taskTitle:{
    marginTop: 20,
    color: themes.gray300,
  },
  taskTitleInput: {
    marginTop: 20,
    marginLeft: 5,
    color: themes.gray100,
  },
  closeIcon:{
    marginRight: 10,
    fill: themes.gray300,
  },
  saveButton:{
    backgroundColor: themes.gray800,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 190,
    height: 43,
    borderWidth: 1,
    borderColor: themes.blue,
    borderRadius: 5
  },
  textButton:{
    textTransform: 'uppercase',
    fontFamily: themes.bold,
    color:  themes.blue,
  }
});