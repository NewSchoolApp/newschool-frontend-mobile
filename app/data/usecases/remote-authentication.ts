import { InvalidCredentialsError } from "@ns/domain/errors/invalid-credentials-error";
import { Authentication } from "@ns/domain/usecases/authentication";
import { HttpClient, HttpStatusCode } from "../protocols/http-client";

export class RemoteAuthentication implements Authentication {
  constructor (private readonly client: HttpClient<Authentication.Result>, private readonly url: string, private readonly headers?: any) { }

  async signIn (data: Authentication.Params): Promise<Authentication.Result> {
    const httpResponse = await this.client.request({
      method: 'post',
      url: this.url,
      headers: this.headers,
      body: {
        ...data,
        grant_type: 'password'
      }
    })
    if (httpResponse.statusCode === HttpStatusCode.Unauthorized) {
      throw new InvalidCredentialsError()
    }
    return httpResponse.body as any
  }
}
