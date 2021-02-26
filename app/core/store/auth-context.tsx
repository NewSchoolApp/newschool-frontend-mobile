import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import * as auth from '@ns/environment/http/auth';

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(username: string, password: string): Promise<void>;
}

interface User {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  async function signIn(username: string, password: string) {
    const response = await auth.signIn({ username, password });
    if (response.success) {
      const userApi = {
        token: response.data.token,
      };
      setUser(userApi);
    } else {
      Alert.alert('Ocorreu um erro ao se autenticar.');
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
