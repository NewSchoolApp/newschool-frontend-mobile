import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const StyledButton = styled(Button).attrs<{ textColor: string; }>(props => ({
  labelStyle: {
    color: props.textColor
  }
}))<{ textColor: string; }>`
  padding: 8px;
`;
