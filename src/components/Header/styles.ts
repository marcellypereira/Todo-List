import { StyleSheet } from 'react-native';

import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 173,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.gray700,
  },
  form: {
    width: '85%',
    height: 54,
    position: 'absolute',
    bottom: -54 / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input: {
    height: 54,
    width: 251,
    marginRight: 4,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: themes.md,
    color: themes.gray100,
    backgroundColor: themes.gray500,
    flex: 1,
    paddingRight: 40
  },
  buttonInput: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: themes.blueDark,
  },
  uploadButton: {
    position: 'absolute', 
    top: '55%', 
    right: 90, 
  },
  upload:{
    fill: themes.gray200,
    transform: [{ translateY: -12 }],
    marginLeft: 10,
    paddingLeft: 10
  },
});
