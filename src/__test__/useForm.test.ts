import { renderHook, act } from "@testing-library/react";
import { useForm } from "../state/useForm";
import { FormSchema, FieldType } from "../types/formTypes";

describe("useForm", () => {
  const schema: FormSchema = {
    fields: [
      { name: "username", label: "Username", type: "text", required: true },
      { name: "email", label: "Email", type: "text", required: true },
      {
        name: "subscribe",
        label: "Subscribe",
        type: "checkbox",
        required: false,
      },
    ],
  };

  test("initializes with default values", () => {
    const { result } = renderHook(() => useForm(schema));
    expect(result.current.values).toEqual({
      username: "",
      email: "",
      subscribe: false,
    });
    expect(result.current.errors).toEqual({});
    expect(result.current.status).toBe("idle");
  });

  test("updates values and validates fields", () => {
    const { result } = renderHook(() => useForm(schema));
    act(() => {
      result.current.updateValue("username", "rohit");
    });
    expect(result.current.values.username).toBe("rohit");
    expect(result.current.errors.username).toBeNull();
  });

  test("resets form values", () => {
    const { result } = renderHook(() => useForm(schema));
    act(() => {
      result.current.updateValue("username", "rohit");
      result.current.resetFormValues();
    });
    expect(result.current.values).toEqual({
      username: "",
      email: "",
      subscribe: false,
    });
    expect(result.current.errors).toEqual({});
    expect(result.current.status).toBe("idle");
  });

  test("submits successfully when valid", async () => {
    const { result } = renderHook(() => useForm(schema));
    const onSuccess = jest.fn();
    const onError = jest.fn();
    act(() => {
      result.current.updateValue("username", "rohit");
      result.current.updateValue("email", "rohit@email.com");
    });
    await act(async () => {
      await result.current.submit(onSuccess, onError);
    });
    expect(onSuccess).toHaveBeenCalledWith({
      username: "rohit",
      email: "rohit@email.com",
      subscribe: false,
    });
  });

  test("calls onError if form is invalid", async () => {
    const { result } = renderHook(() => useForm(schema));
    const onSuccess = jest.fn();
    const onError = jest.fn();
    act(() => {
      result.current.updateValue("username", "");
      result.current.updateValue("email", "not-an-email");
    });
    await act(async () => {
      await result.current.submit(onSuccess, onError);
    });
    expect(onSuccess).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
  });
});
