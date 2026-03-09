import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthScreen from '@screens/auth/Auth';
import RootStackNavigator from './RootStack';

export default function Routes() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <RootStackNavigator /> : <AuthScreen />}
    </NavigationContainer>
  );
}
