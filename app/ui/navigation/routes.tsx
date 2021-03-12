import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LoginScreen } from '@ns/ui/modules/login/login-screen';
import { useAuth } from '@ns/ui/core/hooks/auth';
import { HomeScreen } from '@ns/ui/modules/home/home-screen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const defaultScreenOption = () => ({
  headerShown: false,
})

const LoginRoutes = () => (
  <Stack.Navigator
    screenOptions={defaultScreenOption}
    initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const SecuredRoutes = () => (
  <Stack.Navigator
    screenOptions={defaultScreenOption}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export const Routes = () => {
  const { data: user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <SecuredRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
};
