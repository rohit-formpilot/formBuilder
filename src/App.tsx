import "./styles.css";
import { useForm } from "./state/useForm";
import { Form } from "./components/Form/FormUI";
import { userInfoCollectionformSchema as schema} from "./schemas/formSchema";

export default function App() {
  const { values, errors, updateValue, submit } = useForm(schema);

  const handleSubmit = (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    submit((values) => {
        console.log(values);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <main className="App">
      <h1>User Info Form</h1>
      <Form
        schema={schema}
        values={values}
        errors={errors}
        onChange={updateValue}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
