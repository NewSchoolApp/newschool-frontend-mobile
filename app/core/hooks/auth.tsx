import { useContext } from 'react';
import AuthContext from '@ns/core/store/auth-context';

export const useAuth = () => useContext(AuthContext);
