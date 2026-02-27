import { useMemo } from 'react';
import {
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
import { COLORS } from '@constants/colors';
import { FavouriteButton } from '@components/favouriteButton';
import { styles } from './styles';
import CustomActivityIndicator from '@components/customActivityIndicator';

export default function ProductDetails() {
  const route = useRoute<RouteProp<StackScreenTypes>>();
  const { productId } = route.params;

  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isWishlisted = useMemo(
    () => wishlistItems.some(item => item.id === productId),
    [wishlistItems, productId],
  );

  const navigation = useNavigation<StackNavProp>();

  const { data, isFetching } = useProductDetailsById(productId);

  const handleBackButton = () => {
    navigation.pop();
  };

  if (isFetching) {
    return <CustomActivityIndicator />;
  }
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <View style={styles.backIcon}>
              <Ionicons
                name="arrow-back"
                size={25}
                onPress={handleBackButton}
                color={COLORS.BG_CARD}
              />
            </View>
            <FavouriteButton
              size={26}
              product={{
                id: data.id,
                title: data.title,
                price: data.price,
                image: data.images[0],
              }}
            />
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
          <TrendingNow title="Recommended Products" />
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonSize}>
          <CustomButton title="Buy Now" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
