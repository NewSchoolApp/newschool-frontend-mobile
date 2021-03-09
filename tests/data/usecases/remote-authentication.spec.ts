import { RemoteAuthentication } from "@ns/data/usecases/remote-authentication"
import { mockAuthenticationParam } from "@root/tests/mocks/usecases/authentication"
import { HttpPostClientSpy, makeHttpPostClientSpy } from "@root/tests/spies/infra/http-client"

export type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (): SutTypes => {
  const httpPostClientSpy = makeHttpPostClientSpy()
  const sut = new RemoteAuthentication(httpPostClientSpy)
  return {
    sut, 
    httpPostClientSpy
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpPostClient with correct values', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const data = mockAuthenticationParam()
    await sut.signIn(data)
    expect(httpPostClientSpy.params).toEqual(
      {
        ...data,
        grant_type: 'password'
      })
  })

  test('Should return HttpPostClient response if succeeds', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const response = await sut.signIn(mockAuthenticationParam())
    expect(httpPostClientSpy.result).toEqual(response)
  })

  test('Should throw if HttpPostClient throws', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    jest.spyOn(httpPostClientSpy, 'post').mockRejectedValueOnce(new Error())
    const promise = sut.signIn(mockAuthenticationParam())
    await expect(promise).rejects.toThrow()
  })
})
