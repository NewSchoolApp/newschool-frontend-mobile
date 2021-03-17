import { RemoteAuthentication } from '@ns/data/usecases/remote-authentication';
import { Authentication } from '@ns/domain/usecases/authentication';
import { AxiosHttpClient } from '@ns/infra/axios/axios-http-client';
import HttpHelper from '@ns/data/protocols/http-helper';
import env from '@ns/main/config/env';

export const makeAuthentication = (): Authentication => {
  const url = env.baseUrl + '/oauth/token';
  const headers = {
    Authorization: HttpHelper.getPasswordCredentials(),
    'Content-Type': 'multipart/form-data',
  };
  const httpPostClient = new AxiosHttpClient();
  return new RemoteAuthentication(httpPostClient, url, headers);
};
