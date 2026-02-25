import { Text, View } from 'react-native';
import CustomAppBar from '@components/customAppBar';

export default function Home() {
  return (
    <>
    <CustomAppBar title='Home' showDrawer={true}/>
    <View>
      <Text>HOME SCREEN</Text>
    </View>
    </>
  );
}
