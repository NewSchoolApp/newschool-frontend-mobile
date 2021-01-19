import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './app/modules/login/screens/login-screen';

const App: FunctionComponent<any> = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;
