import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@ns/data/protocols/http-client';
import axios from 'axios';

export class AxiosHttpClient<T, R> implements HttpClient {
  async request(data: HttpRequest<T>): Promise<HttpResponse<R>> {
    const { status: statusCode, data: response } = await axios.request({
      url: data.url,
      method: data.method,
      data: data.body,
      headers: data.headers,
    });
    return {
      statusCode,
      body: response,
    };
  }
}
