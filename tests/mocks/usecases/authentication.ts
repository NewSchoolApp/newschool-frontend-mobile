import { Authentication } from '@ns/domain/usecases/authentication';

export const mockAuthenticationParam = (): Authentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password',
});
