import { RemoteAuthentication } from "@ns/data/usecases/remote-authentication";
import { Authentication } from "@ns/domain/usecases/authentication";
import { AxiosHttpClient } from "@ns/infra/axios/axios-http-client";
import AxiosHelper from "@ns/data/protocols/http-helper";
import env from "@ns/main/config/env";

export const makeAuthentication = (): Authentication => {
  const configurations = {
    headers: {
      'Authorization': AxiosHelper.getPasswordCredentials(),
      'Content-Type': 'multipart/form-data',
    },
  }
  const httpPostClient = new AxiosHttpClient(env.baseUrl + '/oauth/token', configurations)
  return new RemoteAuthentication(httpPostClient)
}
