import utils from '@ns/utils';
import { http } from './config';

export interface SignInRequest {
  username: string;
  password: string;
}

export interface UserCredentials {
  token: string;
}

//TODO: Criar estrutura base para requests
export const signIn = async (
  request: SignInRequest,
): Promise<UserCredentials> => {
    const { data: { token } } = await http.post(
      '/oauth/token',
      utils.toFormData({
        ...request,
        grant_type: 'password',
      }),
      {
        headers: {
          Authorization: utils.getPasswordCredentials(),
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return { token };
};
