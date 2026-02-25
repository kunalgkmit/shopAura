import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthScreen from '@screens/auth/Auth';
import DrawerTabScreen from './DrawerNavigation';

export default function Routes() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerTabScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
}
