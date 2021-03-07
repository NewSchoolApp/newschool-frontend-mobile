import styled from 'styled-components/native';
import { Image } from '@ns/ui/components/atoms/image/image';
import { PRIMARY } from '@ns/ui/styles/colors/constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${PRIMARY};
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
