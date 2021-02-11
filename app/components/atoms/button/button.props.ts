export interface ButtonProps {
  text: string;
  onPress: () => void;
  mode: 'text' | 'outlined' | 'contained';
  textColor: string;
  icon: string;
}
