import CustomAppBar from '@components/customAppBar';
import { Text, View } from 'react-native';

export default function Cart() {
  return (
    <>
      <CustomAppBar title="Cart" showDrawer={true} />
      <View>
        <Text>Cart</Text>
      </View>
    </>
  );
}
