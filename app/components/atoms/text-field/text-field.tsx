import React from 'react';
import {Input} from './text-field.styles';
import {TextFieldProps} from './text-field.props';

export const TextField = (props: TextFieldProps) => {
  return (
    // @ts-ignore
    // Devido a um problema na lib (https://github.com/callstack/react-native-paper/issues/1971)
    <Input
      underlineColor="white"
      placeholderTextColor="white"
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  );
};
