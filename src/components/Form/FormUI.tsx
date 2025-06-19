import React from "react";

import { FormSchema } from "../../types/formTypes";
import { renderField } from "../../utils/renderField";

interface FormProps {
  schema: FormSchema;
  values: Record<string, any>;
  errors: Record<string, any>;
  onChange: (name: string, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({
  schema,
  values,
  errors,
  onChange,
  onSubmit,
}: FormProps) {

  return (
    <form onSubmit={onSubmit} noValidate>
      {schema.fields.map((field) =>
        renderField({ field, values, errors, onChange })
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
