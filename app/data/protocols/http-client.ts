export interface HttpClient<T = any, R = any> {
  request: (data: HttpRequest<T>) => Promise<HttpResponse<R>>;
}

export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
}

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type HttpRequest<T> = {
  body?: T;
  headers?: any;
  method: HttpMethod;
  url: string;
};

export type HttpResponse<R> = {
  statusCode: HttpStatusCode;
  body?: R;
};
