import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { themes } from '../../themes';
import Logo from '../../assets/todo.svg';
import PlusIcon from '../../assets/plus.svg';
import ImageIcon from '../../assets/image.svg';
import ImageFilled from '../../assets/filledFile.svg';
import * as ImagePicker from 'expo-image-picker';

interface HeaderProps {
  task: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function Header({ task, onChangeText, onPress }: HeaderProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [isLoading, setIsLoading] = useState(false);
  const [proofOfResidence, setProofOfResidence] = useState<{
    isFilled: boolean;
    uri: string;
  }>({
    isFilled: false,
    uri: '',
  });

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const handleSelectUploadFile = async () => {
    setIsLoading(true);

    const launchImagePicker = async () => {
      return await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    };

    if (status) {
      let result = await launchImagePicker();
      if (!result.canceled) {
        setProofOfResidence({
          isFilled: true,
          uri: result?.assets[0].uri,
        });
      }
    } else {
      const response = await requestPermission();
      if (response.granted) {
        let result = await launchImagePicker();
        if (!result.canceled) {
          setProofOfResidence({
            isFilled: true,
            uri: result?.assets[0].uri,
          });
        }
      }
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <TextInput
          style={[styles.input, { borderColor: isFocused ? themes.purple : themes.gray700 }]}
          placeholder="Descrição da tarefa ..."
          placeholderTextColor="#4F4F4F"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={task}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.uploadButton} onPress={handleSelectUploadFile}>
          {isLoading ? (
            <ActivityIndicator size="small" color={themes.gray200} style={styles.loading} />
          ) : proofOfResidence.isFilled ? (
            <ImageFilled style={styles.uploadFilled} />
          ) : (
            <ImageIcon style={styles.upload} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInput} onPress={onPress}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
