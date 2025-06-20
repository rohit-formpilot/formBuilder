import { TextAreaInputPropsTypes } from "../../types/TextAreaInputPropsTypes";
export default function TextAreaInput({ name, label, value, error, onChange }: TextAreaInputPropsTypes) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        style={{ width: "100%" }}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
