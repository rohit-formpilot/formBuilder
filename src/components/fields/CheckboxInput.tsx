interface CheckboxInputProps {
  name: string;
  label: string;
  checked: boolean;
  error?: string | null;
  onChange: (checked: boolean) => void;
}

export default function CheckboxInput({
  name,
  label,
  checked,
  error,
  onChange,
}: CheckboxInputProps) {
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
