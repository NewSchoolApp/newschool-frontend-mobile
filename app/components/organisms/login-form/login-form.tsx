import React from 'react';
import Button from '../../atoms/button/button';
import {TextField} from '../../atoms/text-field/text-field';
import {ItemContainer, Container} from './login-form.styles';
import {LoginFormProps} from './login-form.props';

export const LoginForm = (props: LoginFormProps) => {
  return (
    <Container>
      <ItemContainer>
        <TextField
          error={props.usernameError}
          onBlur={props.onUsernameBlur}
          onChangeText={props.onUsernameChanged}
          placeholder="Usuário"
        />
      </ItemContainer>
      <ItemContainer>
        <TextField
          error={props.passwordError}
          onBlur={props.onPasswordBlur}
          onChangeText={props.onPasswordChanged}
          placeholder="Senha"
        />
      </ItemContainer>
      <ItemContainer>
        <Button onPress={() => props.onSubmit()} text="Entrar" />
      </ItemContainer>
      <ItemContainer>
        <Button onPress={props.onSignup} outline text="Cadastrar" />
      </ItemContainer>
    </Container>
  );
};
