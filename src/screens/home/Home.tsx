import { View } from 'react-native';
import { CustomAppBar } from '@components/customAppBar';
import { Banner } from '@components/banner';
import { Categories } from '@components/categories';
import { styles } from './styles';

export default function Home() {
  return (
    <>
      <CustomAppBar title="Home" showDrawer={true} />
      <View style={styles.container}>
        <Banner />
        <Categories />
      </View>
    </>
  );
}
