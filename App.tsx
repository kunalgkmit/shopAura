import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Shop Aura</Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
