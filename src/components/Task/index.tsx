import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import Check from '../../assets/check.svg';
import TrashIcon from '../../assets/trash.svg';
import EditIcon from '../../assets/edit.svg';

export type TaskProps = {
  id?: string;
  title: string;
  isCompleted: boolean;
  onRemove?: (id: string) => void;
  onTaskCheck?: () => void;
  onEdit?: (id: string) => void;
};

export function Task({ id, title, isCompleted, onRemove, onTaskCheck, onEdit }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{...isCompleted ? styles.circleCheck : styles.circleEmpty}}
        onPress={onTaskCheck}
      >
        {isCompleted && <Check />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={{
          ...isCompleted ? styles.textDone : styles.textCreated,
        }}> 
          {title} 
        </Text>
      </View>

      {!isCompleted && ( 
        <TouchableOpacity onPress={() => onEdit && onEdit(id as string)}>
          <EditIcon style={styles.editIcon}/>
        </TouchableOpacity>
      )}

      <TouchableOpacity 
        onPress={() => onRemove && onRemove(id as string)}
      >
        <TrashIcon  />
      </TouchableOpacity>
    </View>
  );
}