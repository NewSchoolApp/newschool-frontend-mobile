import { RemoteAuthentication } from "@ns/data/usecases/remote-authentication"
import { Authentication } from "@ns/domain/usecases/authentication"
import { mockAuthenticationParam } from "@root/tests/mocks/usecases/authentication"
import { HttpClientSpy } from "@root/tests/spies/infra/http-client"
import { InvalidCredentialsError } from "@ns/domain/errors/invalid-credentials-error";
import { UnexpectedError } from "@ns/domain/errors/unexpected-error";

export type SutTypes = {
  sut: RemoteAuthentication
  httpClientSpy: HttpClientSpy<Authentication.Result>
}

const makeSut = (): SutTypes => {
  const httpClientSpy = new HttpClientSpy<Authentication.Result>()
  const sut = new RemoteAuthentication(httpClientSpy, 'any_url', 'any_header')
  return {
    sut, 
    httpClientSpy: httpClientSpy
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpClient with correct values', async () => {
    const { sut, httpClientSpy } = makeSut()
    const data = mockAuthenticationParam()
    await sut.signIn(data)
    expect(httpClientSpy.body).toEqual({
        ...data,
        grant_type: 'password'
      })
    expect(httpClientSpy.method).toBe("post")
    expect(httpClientSpy.headers).toBe('any_header')
    expect(httpClientSpy.url).toBe('any_url')
  })

  test('Should return HttpClient response if succeeds', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = <any> {
      statusCode: 200,
      body: {
        accessToken: 'any_token'
      }
    }
    const response = await sut.signIn(mockAuthenticationParam())
    expect(httpClientSpy.response.body).toEqual(response)
  })

  test('Should throw InvalidCredentialsError if status code is 401', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = <any> {
      statusCode: 401,
    }
    const promise = sut.signIn(mockAuthenticationParam())
    await expect(promise).rejects.toThrow(InvalidCredentialsError)
  })

  test('Should throw UnexpectedError if status code is 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = <any> {
      statusCode: 500,
    }
    const promise = sut.signIn(mockAuthenticationParam())
    await expect(promise).rejects.toThrow(UnexpectedError)
  })
})

