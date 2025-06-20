import { FormSchema } from "../types/formTypes";

export const userInfoCollectionformSchema: FormSchema = {
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "phone", label: "Phone", type: "text", required: true, pattern: /^[0-9*#]+$/, patternMessage:'Please enter a valid Phone Number' },
    { name: "email", label: "Email", type: "text", required: true, pattern: /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/, patternMessage:'Please enter a valid email address' },
    { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
    { name: "terms", label: "Terms", type: "checkbox", required: true },
  ],
};
