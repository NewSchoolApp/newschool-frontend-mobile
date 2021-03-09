export interface TextFieldProps {
  secureTextEntry?: boolean;
  onBlur: (e: any) => void;
  placeholder?: string;
  onChangeText: (text: string) => void;
  error?: string;
}
