import React from 'react';
import { PodiumMedalProps } from './podium-medal.props';
import { MedalContainer, ImgMedal } from './podium-medal.style';

export const PodiumMedal = (props: PodiumMedalProps) => {
  const medal =
    props.medalType == 'gold'
      ? require('@ns/assets/medal0.png')
      : props.medalType == 'silver'
      ? require('@ns/assets/medal1.png')
      : require('@ns/assets/medal2.png');
  return (
    <MedalContainer medalType={props.medalType}>
      <ImgMedal medalType={props.medalType} source={medal} />
    </MedalContainer>
  );
};
