import { FieldSchema } from "./formTypes";

export interface RenderFieldPropsType {
  field: FieldSchema;
  values: Record<string, any>;
  errors: Record<string, string | null>;
  onChange: (name: string, value: any) => void;
}