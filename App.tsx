import { Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Shop Aura</Text>
        <Ionicons name="filter" />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
