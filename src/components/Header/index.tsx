import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { themes } from '../../themes';
import Logo from '../../assets/todo.svg';
import PlusIcon from '../../assets/plus.svg';
import Upload from '../Upload';
import ImageIcon from '../../assets/image.svg';

interface HeaderProps {
  task: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function Header({ task, onChangeText, onPress }: HeaderProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

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
          <TouchableOpacity style={styles.uploadButton}>
          <View>
          <ImageIcon style={styles.upload} />

          </View>
          </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonInput}
          onPress={onPress}
        >
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}