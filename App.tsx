import React, {FunctionComponent} from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';
import {LoginForm} from './app/components/organisms/login-form/login-form';
import { Provider as PaperProvider } from 'react-native-paper';
import { Image } from './app/components/atoms/image/image';

const App: FunctionComponent<any> = () => {
  const onSubmit = (username: string, password: string) => {
    Alert.alert(`User: ${username}\nPassword: ${password}`);
  };

  const onSignup = () => {
    Alert.alert('Signup!');
  };

  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#6600cc', justifyContent: 'center'}}>
          <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require("./app/assets/paraisopolis.png")} />
        <LoginForm onSubmit={onSubmit} onSignup={onSignup} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
