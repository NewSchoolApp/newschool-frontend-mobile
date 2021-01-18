import * as React from 'react';
import {TextInputProps} from 'react-native';
import {LabelProps} from './label.props';
import {Text} from './label.styles';

const presets: {[key: string]: TextInputProps} = {
  medium: {
    style: {
      fontSize: 14,
      fontWeight: '400',
      textAlign: 'center',
    },
  },
};

export const Label = (props: LabelProps) => {
  return (
    <Text {...presets[props.preset]} {...props} color={props.color || 'black'}>
      {props.text}
    </Text>
  );
};
