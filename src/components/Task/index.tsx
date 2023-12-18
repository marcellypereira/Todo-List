import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

import Check from '../../assets/check.svg'
import TrashIcon from '../../assets/trash.svg'

export type TaskProps = {
  id?: string;
  title: string;
  isCompleted: boolean;
  onRemove?: (id: string) => void;
  onTaskCheck?: () => void;
}

export function Task({ id, title, isCompleted, onRemove, onTaskCheck }: TaskProps) {
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

      <TouchableOpacity 
        onPress={ () => onRemove(id) }
      >
        <TrashIcon  />
      </TouchableOpacity>
    </View>
  );
}