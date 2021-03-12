import { HttpClient, HttpStatusCode, HttpMethod, HttpRequest, HttpResponse } from "@ns/data/protocols/http-client"

export class HttpClientSpy<R> implements HttpClient<R> {
  body?: any
  headers?: any
  url?: string
  method?: HttpMethod
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.Ok
  }
  async request (data: HttpRequest): Promise<HttpResponse<R>> {
    this.body = data.body
    this.headers = data.headers
    this.url = data.url
    this.method = data.method
    return this.response
  }
}
