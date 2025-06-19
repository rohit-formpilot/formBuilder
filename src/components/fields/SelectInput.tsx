interface SelectInputProps {
  name: string;
  label: string;
  value: string;
  options: string[];
  error?: string | null;
  onChange: (value: string) => void;
}
export default function SelectInput({
  name,
  label,
  value,
  options,
  error,
  onChange,
}: SelectInputProps) {
  return (
    <main>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {/* Initial Select Options make it dynamic later */}
        <option value={""}>{"Select"}</option>

        {/* Dynamic value */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <small role="alert">{error}</small>}
    </main>
  );
}
