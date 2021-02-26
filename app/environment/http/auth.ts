import utils from '@ns/utils';
import { DataResponse, ErrorResponse, http } from './config';

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
): Promise<DataResponse<UserCredentials> | ErrorResponse> => {
  try {
    const res = await http.post(
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
    return { success: true, data: { token: res.data.accessToken } };
  } catch (err) {
    return { success: false, error: 'Ocorreu um erro ao autenticar' };
  }
};
