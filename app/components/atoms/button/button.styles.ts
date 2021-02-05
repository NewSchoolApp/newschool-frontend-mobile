import styled from 'styled-components/native';
import {Button} from 'react-native-paper';

export const StyledButton = styled(Button).attrs<{textColor: string}>(
  (props) => ({
    labelStyle: {
      color: props.textColor,
    },
  }),
)<{textColor: string}>`
  border-style: solid;
  margin: -3px;
  border: ${props => props.mode == 'outlined' ? 2 : 0}px solid #FFF;
  padding: 8px;
`;
