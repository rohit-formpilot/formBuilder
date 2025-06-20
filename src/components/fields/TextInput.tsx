import { TextInputPropsType } from "../../types/TextInputPropsType";


export default function TextInput({ name, label, value, error, onChange }: TextInputPropsType) {
  return (
    <main>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && <small role="alert">{error}</small>}
    </main>
  );
}
