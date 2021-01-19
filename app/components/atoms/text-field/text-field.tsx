import React from 'react';
import {Input} from './text-field.styles';
import {TextFieldProps} from './text-field.props';

export const TextField = (props: TextFieldProps) => {
  return (
    <Input
      underlineColor="white"
      placeholderTextColor="white"
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  );
};
