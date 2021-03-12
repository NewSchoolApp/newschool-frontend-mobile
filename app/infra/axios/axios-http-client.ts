import { HttpClient } from "@ns/data/protocols/http-client";
import AxiosHelper from "./axios-helper";
import axios from "axios";

export class AxiosHttpClient implements HttpClient {
  constructor (private url: string, private configurations?: any) { }

  async request <P extends unknown, R extends unknown>(data: P): Promise<R> {
    const formData = AxiosHelper.toFormData(data)
    const response: any = await axios.post<P, R>(this.url, formData, this.configurations)
    return response.data
  }
}
