import { FieldSchema } from "../types/formTypes";

export const validateField = (field: FieldSchema, value: any ): string | null => {
  if (field.required && !value) return `${field.label} is required`;
  return null;
};
