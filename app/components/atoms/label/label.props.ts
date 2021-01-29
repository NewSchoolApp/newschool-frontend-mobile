import {TextInputProps} from 'react-native';

export interface LabelProps extends TextInputProps {
  text: string;
  preset: string;
  color: string;
}
