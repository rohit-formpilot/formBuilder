import { useState } from "react";
import { FormSchema } from "../types/formTypes";
import { validateField } from "../validation/validateField";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useForm(schema: FormSchema) {
  const initialValues: Record<string, any> = schema.fields.reduce(
    (acc, field) => {
      acc[field.name] = field.type === "checkbox" ? false : "";
      return acc;
    },
    {} as Record<string, any>
  );

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function updateValue(name: string, value: any) {
    setValues((prev) => ({ ...prev, [name]: value }));
    const field = schema.fields.find((f) => f.name === name);
    if (field) {
      setErrors((prev) => ({ ...prev, [name]: validateField(field, value) }));
    }
  }

  function isFormValid() {
    const newError: Record<string, string | null> = {};
    schema.fields.forEach((field) => {
      newError[field.name] = validateField(field, values[field.name]);
    });
    setErrors(newError);
    return Object.keys(newError)
      .map((key) => newError[key])
      .every((error) => error === null);
  }

  function resetFormValues() {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  }

  async function submit(
    onSuccess: (values: Record<string, any>) => void | Promise<void>,
    onError: (errors: Record<string, string | null>) => void
  ) {
    const isValid = isFormValid();
    if (isValid) {
      setStatus("submitting");
      try {
        await onSuccess?.(values);
        setStatus("success");
      } catch (e) {
        setStatus("error");
      }
    } else {
      setStatus("error");
      onError?.(errors);
    }
  }

  return {
    values,
    errors,
    status,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
    isError: status === "error",
    updateValue,
    isFormValid,
    resetFormValues,
    submit,
  };
}
