import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
    uploadButton: {
      position: 'absolute', 
    
    },
    upload:{
      fill: themes.gray200,
      transform: [{ translateY: -12 }]
    }
});