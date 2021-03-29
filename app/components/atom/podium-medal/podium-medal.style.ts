import styled from 'styled-components/native';

export const MedalContainer = styled.View`
  width: ${(props) => (props.medalType == 'gold' ? '35px' : '30px')};
  height: ${(props) => (props.medalType == 'gold' ? '35px' : '30px')};
  margin-bottom: ${(props) => (props.medalType == 'gold' ? '6px' : '10px')};
`;

export const ImgMedal = styled.Image`
  position: relative;
  width: ${(props) => (props.medalType == 'gold' ? '35px' : '30px')};
  height: ${(props) => (props.medalType == 'gold' ? '35px' : '30px')};
`;
