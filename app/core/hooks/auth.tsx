import { useContext } from 'react';
import AuthContext from '../store/auth-context';

export const useAuth = () => useContext(AuthContext);
