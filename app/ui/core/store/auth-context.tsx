import React, { createContext, ReactNode } from 'react';
import { useFetch } from '@ns/ui/core/hooks/helpers';
import { Authentication } from '@ns/domain/usecases/authentication';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const signIn = async (
  authentication: Authentication,
  data: any,
): Promise<Authentication.Result> => await authentication.signIn(data);

interface AuthContextData {
  data?: Authentication.Result | null;
  signIn(data: Authentication.Params): Promise<void>;
}

export interface Props {
  children?: ReactNode;
  authentication: Authentication;
}

export const AuthProvider = (props: Props) => {
  const { authentication, children } = props;
  const { data, fetch } = useFetch((res) => signIn(authentication, res));
  return (
    <AuthContext.Provider value={{ data, signIn: fetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
