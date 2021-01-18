export interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  onSignup: () => void;
}
