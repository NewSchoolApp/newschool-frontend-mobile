import React from 'react';
import {Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {LoginForm} from '../../components/organisms/login-form/login-form';
import {Container, StyledImage} from './login-screen.styles';
import {Logo} from '../../components/atoms/logo/logo';
import {useAuth} from '../../core/hooks/auth';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha deve ter 6 carcteres')
    .required('Campo obrigatório'),
  username: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

export const LoginScreen = () => {
  const {signIn} = useAuth();

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
      <Formik
        validationSchema={SignupSchema}
        onSubmit={(values) => onSubmit(values.username, values.password)}
        initialValues={{
          username: '',
          password: '',
        }}>
        {({errors, handleChange, handleBlur, handleSubmit, values}) => (
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
    </Container>
  );
};
