import { HttpPostClient } from "@ns/data/protocols/http-post-client";
import AxiosHelper from "./axios-helper";
import axios from "axios";

export class AxiosHttpClient implements HttpPostClient {
  constructor (private url: string, private configurations?: any) { }

  async post <P extends unknown, R extends unknown>(data: P): Promise<R> {
    const formData = AxiosHelper.toFormData(data)
    const response = await axios.post<P, R>(this.url, formData, this.configurations)
    return response
  }
}
