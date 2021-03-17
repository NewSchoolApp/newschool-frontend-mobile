import { Authentication } from '@ns/domain/usecases/authentication';
import { string } from 'yup/lib/locale';

export const mockAuthenticationParam = (): Authentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password',
});
