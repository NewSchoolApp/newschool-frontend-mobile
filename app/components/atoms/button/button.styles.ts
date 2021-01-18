import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  background: string;
  border: string;
}>`
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.border};
  background-color: ${(props) => props.background};
`;
