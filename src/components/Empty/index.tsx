import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import clipboard from '../../assets/clipboardIcon.png';

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} style={styles.image} />
      <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textRegular}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}