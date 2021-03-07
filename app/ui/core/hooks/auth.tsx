import { useContext } from 'react';
import AuthContext from '@ns/ui/core/store/auth-context';

export const useAuth = () => useContext(AuthContext);
