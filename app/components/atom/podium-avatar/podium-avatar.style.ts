import styled from 'styled-components/native';
import { PodiumAvatarProps } from './podium-avatar.props';

export const AvatarContainer = styled.View<PodiumAvatarProps>`
  width: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  height: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  margin-bottom: ${(props) => (props.avatarType == 'gold' ? '5px' : '15px')};
`;

export const ImgAvatar = styled.Image<PodiumAvatarProps>`
  position: relative;
  width: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  height: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  border-radius: ${(props) => (props.avatarType == 'gold' ? '35px' : '29px')};
`;
