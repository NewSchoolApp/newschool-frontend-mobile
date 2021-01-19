import React, {useState} from 'react';
import Button from '../../atoms/button/button';
import {TextField} from '../../atoms/text-field/text-field';
import {ItemContainer, Container} from './login-form.styles';
import {LoginFormProps} from './login-form.props';

export const LoginForm = (props: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <ItemContainer>
        <TextField onChangeText={setUsername} placeholder="Usuário" />
      </ItemContainer>
      <ItemContainer>
        <TextField onChangeText={setPassword} placeholder="Senha" />
      </ItemContainer>
      <ItemContainer>
        <Button
          onPress={() => props.onSubmit(username, password)}
          text="Entrar"
        />
      </ItemContainer>
      <ItemContainer>
        <Button onPress={props.onSignup} outline text="Cadastrar" />
      </ItemContainer>
    </Container>
  );
};
