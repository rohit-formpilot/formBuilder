import { renderField } from "../../utils/renderField";
import { FormPropsType } from "../../types/FormPropsType";

export function Form({ schema, values, errors, onChange, onSubmit }: FormPropsType) {
  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "5px", width: "250px",}}>
      {schema.fields.map((field) => (
        <main key={field.name}>
          {renderField({ field, values, errors, onChange })}
        </main>
      ))}
      <button style={{width: "100px", height: "30px", border: "2px dashed black", borderRadius: "20px",}} type="submit">
        Submit
      </button>
    </form>
  );
}
