import React from 'react';
import {Container, Input} from './text-field.styles';
import {TextFieldProps} from './text-field.props';

export const TextField = (props: TextFieldProps) => {
  return (
    <Container>
      <Input placeholderTextColor={"white"} placeholder={props.placeholder} onChangeText={props.onChangeText} />
    </Container>
  );
};
