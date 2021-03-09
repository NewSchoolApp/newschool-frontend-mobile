import React from 'react';
import { Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from '@ns/ui/components/organisms/login-form/login-form';
import { Container, StyledImage } from './login-screen.styles';
import { Logo } from '@ns/ui/components/atoms/logo/logo';
import { useAuth } from '@ns/ui/core/hooks/auth';
import { ActivityIndicator } from 'react-native-paper';
import { WHITE } from '@ns/ui/styles/colors/constants';
import { useFetch } from '@ns/ui/core/hooks/helpers';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha deve ter 6 carcteres')
    .required('Campo obrigatório'),
  username: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

export const LoginScreen = () => {
  const { signIn } = useAuth();
  const { loading, fetch: onSubmit } = useFetch(signIn);
  const onSignup = () => {
    Alert.alert('Signup!');
  };
  return (
    <Container>
      {loading ? (
        <ActivityIndicator animating={true} color={WHITE} size="large" />
      ) : (
        <>
          <StyledImage file={'paraisopolis'} />
          <Logo />
          <Formik
            validationSchema={SignupSchema}
            onSubmit={(values) => onSubmit(values)}
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
