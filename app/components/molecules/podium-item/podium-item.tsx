import React from 'react';
import { PodiumItemProps } from './podium-item.props';
import { PodiumItemContainer, TextPoints, TextName } from './podium-item.style';
import { PodiumAvatar } from '@ns/components/atom/podium-avatar/podium-avatar';
import { PodiumMedal } from '@ns/components/atom/podium-medal/podium-medal';

export const PodiumItem = (props: PodiumItemProps) => {
  return (
    <PodiumItemContainer>
      <PodiumMedal medalType={props.itemType} />
      <PodiumAvatar avatarType={props.itemType} avatarImg={props.imgAvatar} />
      <TextPoints>{props.xp} PTS</TextPoints>
      <TextName>{props.name}</TextName>
    </PodiumItemContainer>
  );
};
