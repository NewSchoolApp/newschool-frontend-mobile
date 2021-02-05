import React from 'react';
import {ButtonProps} from './button.props';
import {StyledButton} from './button.styles';

const Button = (props: ButtonProps) => {
  return (
    // @ts-ignore
    // Devido a um problema na lib (https://github.com/callstack/react-native-paper/issues/1971)
    <StyledButton
      textColor={props.textColor ? props.textColor : "#FFF"}
      mode={props.mode}
      color="white"
      onPress={props.onPress}
      icon={props.icon}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
