import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LoginScreen} from '../modules/login/login-screen';
import {Stack} from '../../App';
import {useAuth} from '../core/hooks/auth';
import {HomeScreen} from '../modules/home/home-screen';

const LoginRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const SecuredRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export const Routes = () => {
  const {signed} = useAuth();
  console.log("SIGNED? " + signed)
  return (
    <NavigationContainer>
      {signed ? <SecuredRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
};
