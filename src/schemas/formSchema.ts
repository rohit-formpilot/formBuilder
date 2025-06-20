import { FormSchema } from "../types/formTypes";

export const userInfoCollectionformSchema: FormSchema = {
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "phone", label: "Phone", type: "text", required: true },
    { name: "email", label: "Email", type: "text", required: true },
    { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
    { name: "terms", label: "Terms", type: "checkbox", required: true },

    // { name: "bio", label: "Short Bio", type: "textbox", required: true },
  ],
};
