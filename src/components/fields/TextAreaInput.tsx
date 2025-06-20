import { TextAreaInputPropsTypes } from "../../types/TextAreaInputPropsTypes";
export default function TextAreaInput({ name, label, value, error, onChange }: TextAreaInputPropsTypes) {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }} >
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5} style={{ width: "100%" }}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </main>
  );
}
