import React from 'react';
import Button from '../../atoms/button/button';
import { TextField } from '../../atoms/text-field/text-field';
import { ItemContainer, FormFields, Container } from './login-form.styles';
import { LoginFormProps } from './login-form.props';

export const LoginForm = (props: LoginFormProps) => {
  return (
    <Container>
      <FormFields>
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
      </FormFields>
      <ItemContainer>
        <Button
          onPress={() => props.onSubmit()}
          mode="contained"
          text="Entrar"
          textColor="#6600cc"
        />
      </ItemContainer>
      <ItemContainer>
        <Button onPress={props.onSignup} mode="outlined" text="Cadastrar" />
      </ItemContainer>
      <ItemContainer>
        <Button icon="facebook" mode="text" text="Entrar com Facebook" />
      </ItemContainer>
      <ItemContainer>
        <Button mode="text" text="Esqueceu seu senha?" />
      </ItemContainer>
    </Container>
  );
};
