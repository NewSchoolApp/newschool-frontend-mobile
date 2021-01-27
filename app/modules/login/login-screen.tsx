import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {LoginForm} from '../../components/organisms/login-form/login-form';
import {Container, StyledImage} from './login-screen.styles';
import {Logo} from '../../components/atoms/logo/logo';
import {useAuth} from '../../core/hooks/auth';

export const LoginScreen = () => {
  const {signIn, signed} = useAuth();

  useEffect(() => {
    if (signed) {
      Alert.alert('Logged in!!!');
    }
  }, [signed]);

  const onSubmit = (username: string, password: string) => {
    signIn(username, password);
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
