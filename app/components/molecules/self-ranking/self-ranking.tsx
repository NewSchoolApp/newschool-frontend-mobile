import React from 'react';
import { Container, Text, Image } from './self-ranking.style';
import { SelfRankingProps } from './self-ranking.props';

export default function SelfRanking(props: SelfRankingProps) {
  const rank = props.rank ? props.rank : 0;
  const avatar = props.avatar
    ? { uri: props.avatar }
    : require('@ns/assets/person.png');
  const points = props.points ? props.points : 0;
  return (
    <Container>
      <Text>{rank}°</Text>
      <Image source={avatar} />
      <Text>{points} XP</Text>
    </Container>
  );
}
