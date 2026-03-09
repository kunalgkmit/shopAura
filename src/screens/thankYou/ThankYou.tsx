import { CustomAppBar } from '@components/customAppBar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import CustomButton from '@components/customButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTES } from '@constants/routes';

export function ThankYou() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleBack = () => {
    navigation.navigate('MainDrawer');
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.thankYou}>Thanks for shopping!</Text>
        <CustomButton title="Fill bag again" onPress={handleBack} />
      </View>
    </>
  );
}
