import React from 'react';
import {Alert} from 'react-native';
import {LoginForm} from '../../../components/organisms/login-form/login-form';
import {Container, StyledImage} from './login-screen.styles';
import {Logo} from '../../../components/atoms/logo/logo';

export const LoginScreen = () => {
  const onSubmit = (username: string, password: string) => {
    Alert.alert(`User: ${username}\nPassword: ${password}`);
  };

  const onSignup = () => {
    Alert.alert('Signup!');
  };

  return (
    <Container>
      <StyledImage file={'paraisopolis'} />
      <Logo />
      <LoginForm onSubmit={onSubmit} onSignup={onSignup} />
    </Container>
  );
};
