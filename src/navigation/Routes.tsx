import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import DrawerTabScreen from './DrawerNavigation';
import AuthScreen from '@screens/auth/Auth';

export default function Routes() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerTabScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
}
