import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { THEMES } from '../../THEMES';

import Logo from '../../assets/todo.svg';
import PlusIcon from '../../assets/plus.svg';

interface HeaderProps { 
  task: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function Header({task, onChangeText, onPress}: HeaderProps) {
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
          style={[styles.input, { borderColor: isFocused ? THEMES.purple : THEMES.gray700 }]}
          placeholder='Adicione aqui uma nova tarefa'
          placeholderTextColor='#4F4F4F'
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={task}
          onChangeText={onChangeText}
        />

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