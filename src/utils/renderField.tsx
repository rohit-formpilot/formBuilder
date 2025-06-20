import React from "react";

import TextInput from "../components/fields/TextInput";
import SelectInput from "../components/fields/SelectInput";
import TextAreaInput from "../components/fields/TextAreaInput";
import CheckboxInput from "../components/fields/CheckboxInput";
import { RenderFieldPropsType } from "../types/RenderFieldPropsType";


export function renderField({ field, values, errors, onChange,} : RenderFieldPropsType) : React.ReactElement | null {
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
