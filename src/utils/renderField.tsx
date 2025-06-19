import React from "react";
import { FieldSchema } from "../types/formTypes";

import CheckboxInput from "../components/fields/CheckboxInput";
import SelectInput from "../components/fields/SelectInput";
import TextAreaInput from "../components/fields/TextAreaInput";
import TextInput from "../components/fields/TextInput";

interface RenderFieldProps {
  field: FieldSchema;
  values: Record<string, any>;
  errors: Record<string, string | null>;
  onChange: (name: string, value: any) => void;
}

export function renderField({ field, values, errors, onChange,} : RenderFieldProps) : React.ReactElement | null {
  const commonProps = {
    name: field.name,
    label: field.label,
    error: errors[field.name],
    onChange: (value: any) => onChange(field.name, value),
  };

  switch (field.type) {
    case "text":
      return ( <TextInput {...commonProps} value={values[field.name]}/>);

    case "textbox":
      return ( <TextAreaInput {...commonProps} value={values[field.name]} />);

    case "select":
      return (
        <SelectInput {...commonProps} value={values[field.name]} options={field.options || []}/>
      );

    case "checkbox":
      return ( <CheckboxInput {...commonProps} checked={values[field.name]} />);

    default:
      return null;
  }
}
