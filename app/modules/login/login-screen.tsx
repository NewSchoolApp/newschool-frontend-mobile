import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from '../../components/organisms/login-form/login-form';
import { Container, StyledImage } from './login-screen.styles';
import { Logo } from '../../components/atoms/logo/logo';
import { useAuth } from '../../core/hooks/auth';
import { ActivityIndicator, Colors } from 'react-native-paper';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha deve ter 6 carcteres')
    .required('Campo obrigatório'),
  username: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

export const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const onSubmit = async (username: string, password: string) => {
    setLoading(true);
    try {
      await signIn(username, password);
    } catch (err) {
      Alert.alert('Erro ao logar este usuártio');
    } finally {
      setLoading(false);
    }
  };

  const onSignup = () => {
    Alert.alert('Signup!');
  };

  return (
    <Container>
      {loading ? (
        <ActivityIndicator animating={true} color={'#fff'} size="large" />
      ) : (
        <>
          <StyledImage file={'paraisopolis'} />
          <Logo />
          <Formik
            validationSchema={SignupSchema}
            onSubmit={(values) => onSubmit(values.username, values.password)}
            initialValues={{
              username: '',
              password: '',
            }}>
            {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
              <LoginForm
                password={values.password}
                username={values.username}
                passwordError={errors.password}
                usernameError={errors.username}
                onPasswordBlur={handleBlur('password')}
                onUsernameBlur={handleBlur('username')}
                onPasswordChanged={handleChange('password')}
                onUsernameChanged={handleChange('username')}
                onSubmit={handleSubmit}
                onSignup={onSignup}
              />
            )}
          </Formik>
        </>
      )}
    </Container>
  );
};
