import React from 'react';
import {Input, HelperText} from './text-field.styles';
import {TextFieldProps} from './text-field.props';

export const TextField = (props: TextFieldProps) => {
  return (
    <>
      {/* @ts-ignore Devido a um problema na lib (https://github.com/callstack/react-native-paper/issues/1971) */}
      <Input
        secureTextEntry={props.secureTextEntry}
        error={!!props.error}
        underlineColor="white"
        mode="flat"
        onBlur={props.onBlur}
        placeholderTextColor="white"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      {!!props.error && <HelperText type="error">{props.error}</HelperText>}
    </>
  );
};
