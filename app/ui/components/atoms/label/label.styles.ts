import styled from 'styled-components/native';

export const Text = styled.Text<{ color: string }>`
  color: ${(props) => props.color};
`;
