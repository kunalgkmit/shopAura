import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SignUpScreen from './src/screens/signUp/SignUp';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <SignUpScreen />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
