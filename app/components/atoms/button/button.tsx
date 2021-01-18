import React from 'react';
import {Label} from '../label/label';
import {ButtonProps} from './button.props';
import {Container} from './button.styles';

const Button = (props: ButtonProps) => {
  return (
    <Container
      onPress={props.onPress}
      background={props.outline ? 'transparent' : 'white'}
      border="white">
      <Label
        preset={'medium'}
        color={props.outline ? 'white' : 'purple'}
        text={props.text}
      />
    </Container>
  );
};

export default Button;
