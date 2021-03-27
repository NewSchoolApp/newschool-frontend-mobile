import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LoginScreen } from '@ns/ui/modules/login/login-screen';
import { useAuth } from '@ns/ui/core/hooks/auth';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../components/organisms/bottom-tab/bottom-tab';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const LoginRoutes = () => (
  <Stack.Navigator screenOptions={screenOptions} initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const SecuredRoutes = () => <BottomTabs />;

export const Routes = () => {
  const { data: user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <SecuredRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
};
