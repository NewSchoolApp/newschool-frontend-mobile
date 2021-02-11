import React from 'react';
import LogoSVG from '../../../assets/logo.svg';
import { Container } from './logo.styles';

export const Logo = () => {
  return (
    <Container>
      <LogoSVG width={150} height={150} />
    </Container>
  );
};
