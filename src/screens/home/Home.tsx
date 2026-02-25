import { View } from 'react-native';
import { CustomAppBar } from '@components/customAppBar';
import Banner from '@components/banner';

export default function Home() {
  return (
    <>
      <CustomAppBar title="Home" showDrawer={true} />
      <View>
        <Banner />
      </View>
    </>
  );
}
