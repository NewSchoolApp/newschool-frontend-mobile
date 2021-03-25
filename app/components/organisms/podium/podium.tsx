import React from 'react';
import { PodiumProps } from './podium.props';
import {
  Container,
  Row,
  PodiumContainer,
  TextPoints,
  TextName,
  MedalContainer,
  ImgMedal,
  AvatarContainerGold,
  ImgMedalGold,
  AvatarContainer,
  ImgAvatar,
  ImgAvatarGold,
  MedalContainerGold,
} from './podium.styles';

export const Podium = (props: PodiumProps) => {
  const indexNotExist = {
    userId: '',
    userName: '',
    points: '',
    photoPath: '',
    rank: '',
  };
  for (let x = 0; x < 3; x++) {
    props.usersList.content[x] === undefined
      ? (props.usersList.content[x] = indexNotExist)
      : true;
  }
  const silverAvatar = props.usersList.content[1].photoPath
    ? { uri: props.usersList.content[1].photoPath }
    : require('@ns/assets/person.png');
  const silverXp = props.usersList.content[1].points
    ? props.usersList.content[1].points
    : 0;
  const silverName = props.usersList.content[1].userName
    ? props.usersList.content[1].userName
    : '---';

  const goldAvatar = props.usersList.content[0].photoPath
    ? { uri: props.usersList.content[0].photoPath }
    : require('@ns/assets/person.png');
  const goldXp = props.usersList.content[0].points
    ? props.usersList.content[0].points
    : 0;
  const goldName = props.usersList.content[0].userName
    ? props.usersList.content[0].userName
    : '---';

  const bronzeAvatar = props.usersList.content[2].photoPath
    ? { uri: props.usersList.content[2].photoPath }
    : require('@ns/assets/person.png');
  const bronzeXp = props.usersList.content[2].points
    ? props.usersList.content[2].points
    : 0;
  const bronzeName = props.usersList.content[2].userName
    ? props.usersList.content[2].userName
    : '---';

  return (
    <Container>
      <Row>
        <PodiumContainer>
          <MedalContainer>
            <ImgMedal source={require('@ns/assets/medal1.png')} />
          </MedalContainer>
          <AvatarContainer>
            <ImgAvatar source={silverAvatar} />
          </AvatarContainer>
          <TextPoints>{silverXp} PTS</TextPoints>
          <TextName>{silverName}</TextName>
        </PodiumContainer>

        <PodiumContainer>
          <MedalContainerGold>
            <ImgMedalGold source={require('@ns/assets/medal0.png')} />
          </MedalContainerGold>
          <AvatarContainerGold>
            <ImgAvatarGold source={goldAvatar} />
          </AvatarContainerGold>
          <TextPoints>{goldXp} PTS</TextPoints>
          <TextName>{goldName}</TextName>
        </PodiumContainer>

        <PodiumContainer>
          <MedalContainer>
            <ImgMedal source={require('@ns/assets/medal2.png')} />
          </MedalContainer>
          <AvatarContainer>
            <ImgAvatar source={bronzeAvatar} />
          </AvatarContainer>
          <TextPoints>{bronzeXp} PTS</TextPoints>
          <TextName>{bronzeName}</TextName>
        </PodiumContainer>
      </Row>
    </Container>
  );
};
