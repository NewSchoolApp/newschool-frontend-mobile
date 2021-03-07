import { HttpPostClient } from "@ns/data/protocols/http-post-client";
import axios from "axios";

export class AxiosHttpClient implements HttpPostClient {
  constructor (private url: string, private headers?: any) { }

  async post <P extends unknown, R extends unknown>(data: P): Promise<R> {
    return await axios.post(this.url, data, this.headers)
  }
}
