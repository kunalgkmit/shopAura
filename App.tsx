import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthScreen from './src/screens/auth/Auth';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AuthScreen />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
