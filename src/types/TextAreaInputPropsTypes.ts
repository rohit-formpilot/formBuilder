export interface TextAreaInputPropsTypes {
  name: string;
  label: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
}