import { useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@react-native-vector-icons/ionicons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useProductDetailsById } from '@hooks/useProductDetails';
import CustomButton from '@components/customButton';
import { TrendingNow } from '@components/trendingNow';
import {
  addToWishlist,
  removeFromWishlist,
} from '@store/actions/wishlistActions';
import { styles } from './styles';

export default function ProductDetails() {
  const route = useRoute<RouteProp<StackScreenTypes>>();
  const { productId } = route.params;

  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isWishlisted = useMemo(
    () => wishlistItems.some(item => item.id === productId),
    [wishlistItems],
  );

  const navigation = useNavigation<StackNavProp>();

  const { data, isFetching } = useProductDetailsById(productId);

  const handleBackButton = () => {
    navigation.pop();
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(
        addToWishlist({
          id: data.id,
          title: data.title,
          price: data.price,
          image: data.images[0],
        }),
      );
    }
  };

  if (isFetching) return <ActivityIndicator />;
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.backIcon}>
            <Ionicons name="arrow-back" size={25} onPress={handleBackButton} />
          </View>
          <View>
            <FlatList
              horizontal
              pagingEnabled
              data={data.images}
              keyExtractor={(_, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.image} />
              )}
            />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.price}>₹{data.price}</Text>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
          <TrendingNow />
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonSize}>
          <CustomButton
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            onPress={handleWishlist}
          />
        </View>
        <View style={styles.buttonSize}>
          <CustomButton title="Buy Now" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
