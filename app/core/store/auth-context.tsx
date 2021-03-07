import React, { createContext } from 'react';
import * as auth from '@ns/environment/http/auth';
import { SignInRequest } from '@ns/environment/http/auth';
import { useFetch } from '../hooks/helpers';

interface AuthContextData {
  signed?: boolean;
  user?: User | null;
  signIn(data: SignInRequest): Promise<void>;
}

interface User {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface SignInResponse {
  user: User
  signed: boolean
}

const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const user = await auth.signIn(data);
  return { user, signed: !!user }
}

export const AuthProvider: React.FC = ({ children }) => {
  const { data, fetch } = useFetch(signIn)
  return (
    <AuthContext.Provider value={{ ...data, signIn: fetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
