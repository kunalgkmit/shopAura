import CustomAppBar from '@components/customAppBar';
import { Text, View } from 'react-native';

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
