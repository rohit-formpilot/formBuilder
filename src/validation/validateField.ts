import { FieldSchema } from "../types/formTypes";

export const validateField = (field: FieldSchema, value: any ): string | null => {
  if (field.required && !value) return `${field.label} is required`;

  if (field.pattern && value) {
    const regex = new RegExp(field.pattern);
    if (!regex.test(value)) {
      return field.patternMessage || `${field.label} is invalid`;
    }
  }
  
  if ((field.label   === 'email' || /email/i.test(field.label)) && value) {
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(value)) {
      return field.patternMessage || `Please enter a valid email address.`;
    }
  }

  return null;
};
