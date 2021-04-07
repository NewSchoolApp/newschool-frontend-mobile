import styled from 'styled-components/native';

export const AvatarContainer = styled.View<{ avatarType: string }>`
  width: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  height: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  margin-bottom: ${(props) => (props.avatarType == 'gold' ? '5px' : '15px')};
`;

export const ImgAvatar = styled.Image<{ avatarType: string }>`
  position: relative;
  width: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  height: ${(props) => (props.avatarType == 'gold' ? '70px' : '58px')};
  border-radius: ${(props) => (props.avatarType == 'gold' ? '35px' : '29px')};
`;
