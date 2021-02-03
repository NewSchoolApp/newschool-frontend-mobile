import {createStackNavigator} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './app/core/store/auth-context';
import {Routes} from './app/navigation/routes';
//Error tracking
import * as Sentry from '@sentry/react-native';
import {sentryDsn} from './env';

!__DEV__ &&
  Sentry.init({
    dsn: sentryDsn,
    enableAutoSessionTracking: true,
  });

export const Stack = createStackNavigator();

const App: FunctionComponent<any> = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
