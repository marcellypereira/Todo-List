import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import Check from '../../assets/check.svg';
import TrashIcon from '../../assets/trash.svg';
import { TaskModal } from '../Modal'; 

export type TaskProps = {
  id?: string;
  title: string;
  isCompleted: boolean;
  onRemove?: (id: string) => void;
  onTaskCheck?: () => void;
  onEdit?: () => void; 
};

export function Task({ id, title, isCompleted, onRemove, onTaskCheck, onEdit }: TaskProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title); 
  
  const handleSave = (newTitle: string) => {
    if (onEdit) {
      onEdit();
    }

    setEditedTitle(newTitle);
  };

  const canEdit = true; 

  return (
    <TouchableOpacity onPress={() => canEdit && setModalVisible(true)}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={{ ...isCompleted ? styles.circleCheck : styles.circleEmpty }}
          onPress={onTaskCheck}
        >
          {isCompleted && <Check />}
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={{ ...isCompleted ? styles.textDone : styles.textCreated }}> 
            {editedTitle} 
          </Text>
        </View>

        <TouchableOpacity onPress={() => onRemove && onRemove(id as string)}>
          <TrashIcon />
        </TouchableOpacity>

        <TaskModal 
          isVisible={modalVisible && canEdit}
          onClose={() => setModalVisible(false)}
          task={{ id, title: editedTitle, isCompleted }}
          onSave={handleSave} isCompleted={false}          
        />
      </View>
    </TouchableOpacity>
  );
}
