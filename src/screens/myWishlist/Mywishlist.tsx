import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomAppBar } from '@components/customAppBar';
import { WishlistCard } from '@components/wishlistCard/WishlistCard';
import { styles } from './styles';
import { EmptyContainer } from '@components/emptyComponent';

export default function Mywishlist() {
  const wishlistItems = useSelector(state => state.wishlist.items);
  return (
    <>
      <CustomAppBar title="My Wishlist" showDrawer />
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={EmptyContainer}
          data={wishlistItems}
          renderItem={({ item }) => <WishlistCard productListingData={item} />}
        />
      </View>
    </>
  );
}
