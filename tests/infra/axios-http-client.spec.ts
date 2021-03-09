import { AxiosHttpClient } from "@ns/infra/axios/axios-http-client"
import utils from "@ns/infra/axios/axios-helper"
import axios from 'axios'
import { mockAuthenticationParam } from "../mocks/usecases/authentication"

jest.mock('axios', () => ({
  post(url: string, data?: any, config?: any): Promise<any> {
    return Promise.resolve('any_response')
  }
}))

const makeSut = (): AxiosHttpClient => new AxiosHttpClient('any_route')

describe('AxiosHttpClient', () => {
  test('Should call post() with correct values', async () => {
    const sut = makeSut()
    const axiosSpy = jest.spyOn(axios, 'post')
    const data = mockAuthenticationParam()
    await sut.post(data)
    const formData = utils.toFormData(data)
    expect(axiosSpy).toBeCalledWith('any_route', formData, undefined)
  })

  test('Should return response on succeeds', async () => {
    const sut = makeSut()
    const data = mockAuthenticationParam()
    const response = await sut.post(data)
    expect(response).toBe('any_response')
  })
})
