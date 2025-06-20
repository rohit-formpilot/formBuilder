import "./styles.css";
import { useForm } from "./state/useForm";
import { Form } from "./components/Form/FormUI";
import { userInfoCollectionformSchema as schema } from "./schemas/formSchema";

export default function App() {
  const { values, errors, updateValue, submit, status } = useForm(schema);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(
      async (formValues) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", formValues);
      },
      (formErrors) => console.log(formErrors)
    );
  };

  const renderForm = () => (
    <Form
      schema={schema}
      values={values}
      errors={errors}
      onChange={updateValue}
      onSubmit={handleSubmit}
    />
  );

  const statusComponents: Record<string, JSX.Element> = {
    success: <div className="thank-you">Thank you for submitting the form!</div>,
    submitting: <div className="form-status">Submitting...</div>,
    error: (
      <>
        <div className="form-status form-error">
          Please fix the errors below and resubmit.
        </div>
        {renderForm()}
      </>
    ),
  };

  const renderContent = statusComponents[status] ?? renderForm();

  return (
    <main className="App">
      <h1>User Info Form</h1>
      {renderContent}
    </main>
  );
}
