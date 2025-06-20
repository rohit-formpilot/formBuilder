export interface SelectInputPropsType {
  name: string;
  label: string;
  value: string;
  options: string[];
  error?: string | null;
  onChange: (value: string) => void;
}