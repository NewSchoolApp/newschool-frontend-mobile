import React from 'react';
import { PodiumAvatarProps } from './podium-avatar.props';
import { AvatarContainer, ImgAvatar } from './podium-avatar.style';

export const PodiumAvatar = (props: PodiumAvatarProps) => {
  return (
    <AvatarContainer avatarType={props.avatarType}>
      <ImgAvatar avatarType={props.avatarType} source={props.avatarImg} />
    </AvatarContainer>
  );
};
