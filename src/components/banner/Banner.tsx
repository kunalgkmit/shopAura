import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { IMAGES } from '@constants/constants';
import { COLORS } from '@constants/colors';
import { Text } from 'react-native-gesture-handler';
import CustomButton from '@components/customButton';

export function Banner() {
  return (
    <View style={styles.container}>
      {/* <Image source={IMAGES.HOME_BANNER} style={styles.homeBanner} /> */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[COLORS.HOME_BANNER_GREY, COLORS.HOME_BANNER_PEACH]}
        style={styles.homeBanner}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.textButton}>
            <View style={styles.textWrapper}>
              <Text style={styles.shop}>Shop</Text>
              <Text style={styles.aura}>Aura</Text>
            </View>

            <View style={{ height: 100, width: 100 }}>
              <CustomButton title="Shop Now" onPress={() => {}} />
            </View>
          </View>
          <Image source={IMAGES.HEADPHONE} style={styles.headPhone} />
        </View>
      </LinearGradient>
    </View>
  );
}
