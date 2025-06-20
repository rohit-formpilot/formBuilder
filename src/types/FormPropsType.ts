import { FormSchema } from "./formTypes";

export interface FormPropsType {
  schema: FormSchema;
  values: Record<string, any>;
  errors: Record<string, any>;
  onChange: (name: string, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}