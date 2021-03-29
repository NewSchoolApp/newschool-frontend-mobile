export interface PodiumProps {
  usersList: Array<IUserPodium>;
}

export interface IUserPodium {
  userId: string;
  userName: string;
  points: string;
  photoPath: string;
  rank: string;
}
