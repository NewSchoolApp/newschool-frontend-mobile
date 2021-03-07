import { Authentication } from "@ns/domain/usecases/authentication";
import { HttpPostClient } from "../protocols/http-post-client";

export class RemoteAuthentication implements Authentication {
  constructor (private client: HttpPostClient) { }

  async signIn (data: Authentication.Params): Promise<Authentication.Result> {
    return await this.client.post(data)
  }
}
