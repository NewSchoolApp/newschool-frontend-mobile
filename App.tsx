import React from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';
import { LoginForm } from './app/components/organisms/login-form/login-form';

const App: () => React.ReactNode = () => {

  const onSubmit = (username: string, password: string) => {
    Alert.alert(`User: ${username}\nPassword: ${password}`);
  }

  const onSignup = () => {
    Alert.alert("Signup!")
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: "purple", justifyContent: "center"}}>
        <LoginForm onSubmit={onSubmit} onSignup={onSignup} />
      </SafeAreaView>
    </>
  );
};

export default App;
