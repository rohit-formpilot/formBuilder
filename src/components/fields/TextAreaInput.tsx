interface TextAreaInputProps {
  name: string;
  label: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
}

export default function TextAreaInput({
  name,
  label,
  value,
  error,
  onChange,
}: TextAreaInputProps) {
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
