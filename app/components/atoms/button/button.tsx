import React from 'react';
import {Label} from '../label/label';
import {ButtonProps} from './button.props';
import {StyledButton} from './button.styles';

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      textColor={props.outline ? "white" : "#6600cc"}
      mode={props.outline ? "outlined" : "contained"}
      color="white"
      onPress={props.onPress}>
        {props.text}
    </StyledButton>
  );
};

export default Button;
