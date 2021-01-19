import React from 'react';
import {ButtonProps} from './button.props';
import {StyledButton} from './button.styles';

const Button = (props: ButtonProps) => {
  return (
    // @ts-ignore
    // Devido a um problema na lib (https://github.com/callstack/react-native-paper/issues/1971)
    <StyledButton
      textColor={props.outline ? 'white' : '#6600cc'}
      mode={props.outline ? 'outlined' : 'contained'}
      color="white"
      onPress={props.onPress}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
