import { RemoteAuthentication } from "@ns/data/usecases/remote-authentication";
import { Authentication } from "@ns/domain/usecases/authentication";
import { AxiosHttpClient } from "@ns/infra/axios/axios-http-client";
import AxiosHelper from "@ns/infra/axios/axios-helper";

export const makeAuthentication = (): Authentication => {
  const configurations = {
    headers: {
      'Authorization': AxiosHelper.getPasswordCredentials(),
      'Content-Type': 'multipart/form-data',
    },
  }
  const httpPostClient = new AxiosHttpClient('/oauth/token', configurations)
  return new RemoteAuthentication(httpPostClient)
}
