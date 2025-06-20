export type FieldType = "text" | "select" | "checkbox" | "textbox";

export interface FieldSchema {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  pattern?: RegExp;
  patternMessage?: string;
}

export interface FormSchema {
  fields: FieldSchema[];
}
