import { Image, Text, View } from 'react-native';
import { styles } from './styles';

const homeBanner = require('@assets/images/homeBanner.png');

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={homeBanner} style={styles.homeBanner} />
    </View>
  );
}
