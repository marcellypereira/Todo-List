import React from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';
import ImageIcon from '../../assets/image.svg';
import { styles } from './styles';

const Upload = () => {
  return (
    <TouchableOpacity style={styles.uploadButton}>
      <ImageIcon style={styles.upload} />
    </TouchableOpacity>
  );
};

export default Upload;
