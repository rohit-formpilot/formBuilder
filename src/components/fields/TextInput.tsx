import { TextInputPropsType } from "../../types/TextInputPropsType";

export default function TextInput({ name, label, value, error, onChange }: TextInputPropsType) {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }} >
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" value={value} onChange={(event) => onChange(event.target.value)}/>
      {error && <small style={{color: "red"}}role="alert">{error}</small>}
    </main>
  );
}
