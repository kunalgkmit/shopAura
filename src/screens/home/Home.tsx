import { View } from 'react-native';
import { CustomAppBar } from '@components/customAppBar';
import { Banner } from '@components/banner';
import { Categories } from '@components/categories';
import { styles } from './styles';
import { TrendingNow } from '@components/trendingNow';

export default function Home() {
  return (
    <>
      <CustomAppBar title="Home" showDrawer />
      <View style={styles.container}>
        <Banner />
        <Categories />
        <TrendingNow title="Trending Now" />
      </View>
    </>
  );
}
