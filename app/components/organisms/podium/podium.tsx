import React from 'react';
import { PodiumProps } from './podium.props';
import { Container, Row } from './podium.styles';
import { PodiumItem } from '@ns/components/molecules/podium-item/podium-item';

export const Podium = (props: PodiumProps) => {
  const indexNotExist = {
    userId: '',
    userName: '',
    points: '',
    photoPath: '',
    rank: '',
  };
  for (let x = 0; x < 3; x++) {
    props.usersList[x] === undefined
      ? (props.usersList[x] = indexNotExist)
      : true;
  }
  const silverAvatar = props.usersList[1].photoPath
    ? { uri: props.usersList[1].photoPath }
    : require('@ns/assets/person.png');
  const silverXp = props.usersList[1].points ? props.usersList[1].points : '0';
  const silverName = props.usersList[1].userName
    ? props.usersList[1].userName
    : '---';

  const goldAvatar = props.usersList[0].photoPath
    ? { uri: props.usersList[0].photoPath }
    : require('@ns/assets/person.png');
  const goldXp = props.usersList[0].points ? props.usersList[0].points : '0';
  const goldName = props.usersList[0].userName
    ? props.usersList[0].userName
    : '---';

  const bronzeAvatar = props.usersList[2].photoPath
    ? { uri: props.usersList[2].photoPath }
    : require('@ns/assets/person.png');
  const bronzeXp = props.usersList[2].points ? props.usersList[2].points : '0';
  const bronzeName = props.usersList[2].userName
    ? props.usersList[2].userName
    : '---';

  return (
    <Container>
      <Row>
        <PodiumItem
          itemType={'silver'}
          imgAvatar={silverAvatar}
          name={silverName}
          xp={silverXp}
        />
        <PodiumItem
          itemType={'gold'}
          imgAvatar={goldAvatar}
          name={goldName}
          xp={goldXp}
        />
        <PodiumItem
          itemType={'bronze'}
          imgAvatar={bronzeAvatar}
          name={bronzeName}
          xp={bronzeXp}
        />
      </Row>
    </Container>
  );
};
