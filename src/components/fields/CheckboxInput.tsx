import { CheckboxInputPropsType } from "../../types/CheckboxInputPropsType";
export default function CheckboxInput({ name, label, checked, error, onChange }: CheckboxInputPropsType) {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={name}>
        <input id={name} name={name} type="checkbox" checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        {label}
      </label>
       {error && <small style={{color: "red"}}role="alert">{error}</small>}
    </main>
  );
}
