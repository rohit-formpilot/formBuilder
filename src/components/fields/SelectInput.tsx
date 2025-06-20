import { SelectInputPropsType } from "../../types/SelectInputPropsType";

export default function SelectInput({name, label, value, options, error, onChange }: SelectInputPropsType) {
  return (
    <main style={{ display: "flex", flexDirection: "row", gap: "5px", margin: "10px 0", width: "100%", }} >
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)}>
        {/* Initial Select Options make it dynamic later */}
        <option value={""}>{"Select"}</option>

        {/* Dynamic value */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
       {error && <small style={{color: "red"}}role="alert">{error}</small>}
    </main>
  );
}
