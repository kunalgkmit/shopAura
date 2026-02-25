import { Text, View } from 'react-native';
import { CustomAppBar } from '@components/customAppBar';

export default function Cart() {
  return (
    <>
      <CustomAppBar title="Cart" showDrawer />
      <View>
        <Text>Cart</Text>
      </View>
    </>
  );
}
