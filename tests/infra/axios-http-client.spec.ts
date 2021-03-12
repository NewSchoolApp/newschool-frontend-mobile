import { AxiosHttpClient } from "@ns/infra/axios/axios-http-client"
import axios from 'axios'
import { HttpRequest } from "@ns/data/protocols/http-client"

jest.mock('axios', () => ({
  request(data: { url: string, data?: any, method: string, headers?: any }): Promise<any> {
    return Promise.resolve({
      data: {
        message: 'any_response'
      },
      status: 200
    })
  }
}))

const mockHttpRequest = (): HttpRequest => ({
  url: 'any_url',
  body: {
    name: 'any_value'
  },
  method: 'get',
  headers: 'any_header'
})

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
  test('Should call request() with correct values', async () => {
    const sut = makeSut()
    const axiosSpy = jest.spyOn(axios, 'request')
    const data = mockHttpRequest()
    await sut.request(data)
    expect(axiosSpy).toBeCalledWith({ 
      url: data.url,
      data: data.body,
      headers: data.headers,
      method: data.method
    })
  })

  test('Should return response on succeeds', async () => {
    const sut = makeSut()
    const data = mockHttpRequest()
    const response: any = await sut.request(data)
    expect(response).toEqual({
      body: {
        message: 'any_response'
      },
      statusCode: 200
    })
  })
})
