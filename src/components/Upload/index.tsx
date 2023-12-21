import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import ImageIcon from '../../assets/image.svg'; 
import { styles } from "./styles";

const Upload = () => {
  const handleUploadPress = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', 
      });

      if (!result.canceled) {
        console.log(result);
      } else {
        console.log('Seleção de arquivo cancelada');
      }
    } catch (err: any) {
      const error = err as { message: string };
      Alert.alert('Erro ao selecionar arquivo', error.message);
    }
  };

  return (
    <TouchableOpacity onPress={handleUploadPress} style={styles.uploadButton}>
      <ImageIcon style={styles.upload} /> 
    </TouchableOpacity>
  );
};

export default Upload;
