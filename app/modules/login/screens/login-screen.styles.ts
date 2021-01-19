import styled from 'styled-components/native';
import {Image} from '../../../components/atoms/image/image';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #6600cc;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
