import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
    uploadButton: {
      position: 'absolute', 
      top: '55%', 
      right: 90, 
    },
    upload:{
      fill: themes.gray200,
      transform: [{ translateY: -12 }]
    }
});