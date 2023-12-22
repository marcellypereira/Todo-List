import React, { useRef, useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Animated, Image, TextInput, Keyboard } from 'react-native';
import { styles } from './styles';
import ClipboardIcon from '../../assets/clipboardIcon.png';
import EditIcon from '../../assets/edit.svg';
import CloseIcon from '../../assets/close.svg'; 

type TaskModalProps = {
  isVisible: boolean;
  onClose: () => void;
  task: {
    id?: string;
    title: string;
    isCompleted: boolean;
  };
  onSave: (newTitle: string) => void;
};

export function TaskModal({ isVisible, onClose, task, onSave }: TaskModalProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editedTitle);
    setIsEditing(false);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.modalContainer, { opacity }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <CloseIcon style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.taskContainer}>
            <View style={styles.task}>
              <View style={styles.titleContainer}>
                <Image source={ClipboardIcon} style={styles.clipboard} />
                <Text style={styles.textTarefas}>Tarefa</Text>
              </View>

              <TouchableOpacity onPress={handleEditClick}>
                <EditIcon style={styles.iconEdit} />
              </TouchableOpacity>
            </View>

            {isEditing ? (
              <TextInput
                style={styles.taskTitleInput}
                value={editedTitle}
                onChangeText={(text) => setEditedTitle(text)}
                autoFocus
                onBlur={Keyboard.dismiss}
              />
            ) : (
              <Text style={styles.taskTitle}>{task.title}</Text>
            )}           

          </View>
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}