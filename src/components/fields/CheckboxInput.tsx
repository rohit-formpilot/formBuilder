import { CheckboxInputPropsType } from "../../types/CheckboxInputPropsType";
export default function CheckboxInput({ name, label, checked, error, onChange } : CheckboxInputPropsType) {
  return (
    <main>
      <label htmlFor={name}>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        {label}
      </label>
      {error && <small role="alert">{error}</small>}
    </main>
  );
}
