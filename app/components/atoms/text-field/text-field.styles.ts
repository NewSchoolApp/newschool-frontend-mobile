import styled from 'styled-components/native';
import { TextInput, HelperText as PaperHelperText } from 'react-native-paper';

export const Container = styled.View``;

export const Input = styled(TextInput).attrs({
  theme: {
    colors: {
      text: 'white',
    },
  },
})`
  background-color: transparent;
  height: 40px;
  justify-content: center;
  color: white;
`;

export const HelperText = styled(PaperHelperText)``;
