export interface CheckboxInputPropsType {
  name: string;
  label: string;
  checked: boolean;
  error?: string | null;
  onChange: (checked: boolean) => void;
}