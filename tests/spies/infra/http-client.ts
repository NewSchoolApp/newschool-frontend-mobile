import { HttpPostClient } from "@ns/data/protocols/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {
  params: any = null
  result: any = null
  async post <P extends any, R extends any>(data: P): Promise<R> {
    this.params = data
    this.result = await Promise.resolve('any_value')
    return this.result
  } 
}

export const makeHttpPostClientSpy = (): HttpPostClientSpy => new HttpPostClientSpy()
