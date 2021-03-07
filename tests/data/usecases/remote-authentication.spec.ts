import { HttpPostClient } from "@ns/data/protocols/http-post-client"
import { RemoteAuthentication } from "@ns/data/usecases/remote-authentication"

class HttpPostClientSpy implements HttpPostClient {
  params: any = null
  result: any = null
  async post <P extends any, R extends any>(data: P): Promise<R> {
    this.params = data
    this.result = await Promise.resolve('any_value')
    return this.result
  } 
}

export type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(httpPostClientSpy)
  return {
    sut, 
    httpPostClientSpy
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpPostClient with correct values', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const data = {
      username: 'any_username',
      password: 'any_password'
    }
    await sut.signIn(data)
    expect(httpPostClientSpy.params).toEqual(data)
  })

  test('Should return HttpPostClient response if succeeds', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const response = await sut.signIn({
      username: 'any_username',
      password: 'any_password'
    })
    expect(httpPostClientSpy.result).toEqual(response)
  })
})
