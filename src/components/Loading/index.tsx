import { View, ActivityIndicator } from 'react-native';

import { THEMES } from '../../THEMES';
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={THEMES.blue} />
    </View>
  )
}