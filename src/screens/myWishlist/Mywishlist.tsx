import { Text, View } from 'react-native';
import { CustomAppBar } from '@components/customAppBar';

export default function Mywishlist() {
  return (
    <>
      <CustomAppBar title="My Wishlist" showDrawer />
      <View>
        <Text>My Wishlist</Text>
      </View>
    </>
  );
}
