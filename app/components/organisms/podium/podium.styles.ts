import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 2% 5% 3%;
  width: 90%;
  height: 198px;
`;
export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const PodiumContainer = styled.View`
  width: 27%;
  margin: 2%;
  justify-content: center;
  align-items: center;
`;

export const MedalContainer = styled.View`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;

export const MedalContainerGold = styled.View`
  width: 35px;
  height: 35px;
  margin-bottom: 6px;
`;

export const AvatarContainer = styled.View`
  width: 58px;
  height: 58px;
  margin-bottom: 15px;
`;

export const AvatarContainerGold = styled.View`
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
`;

export const ImgMedal = styled.Image`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const ImgAvatar = styled.Image`
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 29px;
`;

export const ImgMedalGold = styled.Image`
  position: relative;
  width: 35px;
  height: 35px;
`;

export const ImgAvatarGold = styled.Image`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const TextPoints = styled.Text`
  color: #3f3d56;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

export const TextName = styled.Text`
  color: #3f3d56;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
`;
