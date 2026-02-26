import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useProductDetailsById } from '@hooks/useProductDetails';
import CustomButton from '@components/customButton';
import { TrendingNow } from '@components/trendingNow';
import { styles } from './styles';

export default function ProductDetails() {
  const route = useRoute<RouteProp<StackScreenTypes>>();

  const navigation = useNavigation<StackNavProp>();
  const { productId } = route.params;

  const { data, isFetching } = useProductDetailsById(productId);

  const handleBackButton = () => {
    navigation.pop();
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
          <CustomButton title="Add to wishlist" onPress={() => {}} />
        </View>
        <View style={styles.buttonSize}>
          <CustomButton title="Buy Now" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
