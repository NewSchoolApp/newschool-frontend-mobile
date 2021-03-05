import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from '@ns/core/store/auth-context';
import { Routes } from '@ns/navigation/routes';
//Error tracking
import * as Sentry from '@sentry/react-native';
import env from '@ns/main/config/env';

!__DEV__ &&
  Sentry.init({
    dsn: env.sentryDsn,
    enableAutoSessionTracking: true,
  });

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
