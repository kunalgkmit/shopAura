import { Image, View } from 'react-native';
import { styles } from './styles';
import { IMAGES } from '@constants/constants';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.HOME_BANNER} style={styles.homeBanner} />
    </View>
  );
}
