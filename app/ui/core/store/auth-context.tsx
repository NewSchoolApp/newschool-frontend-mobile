import React, { createContext, ReactNode } from 'react';
import { useFetch } from '@ns/ui/core/hooks/helpers';
import { Authentication } from '@ns/domain/usecases/authentication';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const signIn = async (authentication: Authentication, data: any): Promise<Authentication.Result> => {
  const user = await authentication.signIn(data);
  return user 
}

interface AuthContextData {
  user?: Authentication.Result | null;
  signIn(data: Authentication.Params): Promise<void>;
}

export interface AuthProviderProps {
  children?: ReactNode
  authentication: Authentication
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { authentication, children } = props
  const { data, fetch } = useFetch(data => signIn(authentication, data))
  return (
    <AuthContext.Provider value={{ ...data, signIn: fetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
