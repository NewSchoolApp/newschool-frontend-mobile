import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LoginScreen } from '@ns/modules/login/login-screen';
import { useAuth } from '@ns/core/hooks/auth';
import { HomeScreen } from '@ns/modules/home/home-screen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
  const { signed } = useAuth();
  return (
    <NavigationContainer>
      {signed ? <SecuredRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
};
