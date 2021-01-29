export interface LoginFormProps {
  usernameError?: string;
  passwordError?: string;
  password: string;
  username: string;
  onPasswordChanged: (text: string) => void;
  onUsernameChanged: (text: string) => void;
  onPasswordBlur: (e?: any) => void;
  onUsernameBlur: (e?: any) => void;
  onSubmit: () => void;
  onSignup: () => void;
}
