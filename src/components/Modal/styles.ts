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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 350,
    height: '75%',
    marginTop: 120
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  taskContainer: {
    backgroundColor: '#202024',
    padding: 20,
    margin: 20,
    marginTop: 20,
    borderRadius: 5
  },
  task:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',

  },
  clipboard: {
    width: 20,
    height: 20,
    tintColor: '#7C7C8A',
  },
  ImageIcon:{
    width: 20,
    height: 20,
    fill: '#7C7C8A',
  },
  ImageUpload:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20
  },
  textTarefas: {
    fontSize: themes.lg,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7C7C8A',
  },
  iconEdit: {
    fill: '#36343B',
    marginRight: -5,
  },  
  taskTitle:{
    marginTop: 20,
    color: 'white', 
  },
  taskTitleInput: {
    marginTop: 20,
    color: 'white', 
  },
  closeIcon:{
    marginRight: 10,
    fill: '#525252',
  },
  saveButton:{
    backgroundColor: '#202024',
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