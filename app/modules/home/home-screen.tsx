import React from 'react';
import {Label} from '../../components/atoms/label/label';
import {Container} from './home-screen.styles';

export const HomeScreen = () => {
  return (
    <Container>
      <Label color="white" preset="medium" text="Fez login com sucesso!" />
    </Container>
  );
};
