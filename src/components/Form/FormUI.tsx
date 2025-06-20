import { renderField } from "../../utils/renderField";
import { FormPropsType } from "../../types/FormPropsType";

export function Form({ schema, values, errors, onChange, onSubmit }: FormPropsType) {
  return (
    <form onSubmit={onSubmit} noValidate>
      {schema.fields.map((field) =>
        renderField({ field, values, errors, onChange })
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
