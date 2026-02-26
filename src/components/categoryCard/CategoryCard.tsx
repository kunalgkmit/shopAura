import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS } from '@constants/colors';
import { styles } from './styles';

export function CategoryCard({ categoryData }: CategoryCardProps) {
  const { name, icon, color } = categoryData;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.box, { backgroundColor: color }]}>
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={30} color={COLORS.BG_CARD} />
        </View>
        <Text style={styles.categoryName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
