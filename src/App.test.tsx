import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Field Rendering", () => {
  test("First name Field", () => {
    render(<App />);
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
  });

  test("Last name Field", () => {
    render(<App />);
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
  });

  test("Phone number Field", () => {
    render(<App />);
    expect(screen.getByText(/Phone/i)).toBeInTheDocument();
  });

  test("Email Field", () => {
    render(<App />);
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });

  test("Dropdown Selection Field", () => {
    render(<App />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("Show all Gender Options", () => {
    render(<App/>)
    const listOfGenders = screen.getAllByRole('option')
    expect(listOfGenders).toHaveLength(3);
  })

  test("Checkbox Field", () => {
    render(<App />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});

describe("Validation", () => {
  test("Shows error when required fields are empty", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Deo" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    expect(
      await screen.findByText(/Please fix the errors below and resubmit./i)
    ).toBeInTheDocument();
  });

  test("Shows error for invalid email", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    expect(
      await screen.getByText(/Please enter a valid email/i, {exact: false})
    ).toBeInTheDocument();
  });

  test("Shows error for invalid Phone", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "sds2w1w1l" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    expect(
      await screen.findByText(/Please enter a valid Phone number/i)
    ).toBeInTheDocument();
  });

  test("Shows error if checkbox is not checked", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Deo" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "8250948396" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "dev.rohit2001@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText(/gender/i), {
      target: { value: "Male" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });

  test("Shows error if dropdown is not selected", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Deo" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "8250948396" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "dev.rohit2001@gmail.com" },
    });
    fireEvent.click(screen.getByLabelText(/terms/i));
    fireEvent.click(screen.getByText(/submit/i));
    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });
});

describe("Form Submission", () => {
  test("Submit form to see the Thank you text", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Deo" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "8250948396" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "dev.rohit2001@gmail.com" },
    });
    fireEvent.click(screen.getByLabelText(/terms/i));
    fireEvent.change(screen.getByLabelText(/gender/i), {
      target: { value: "Male" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    const getThankyouText = await screen.findByText(
      /Thank you for submitting the form/i,
      {},
      { timeout: 2000 }
    );
    expect(getThankyouText).toBeInTheDocument();
  });

  test("Shows 'Submitting...' text after form submit", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Deo' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '8250948396' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'dev.rohit2001@gmail.com' } });
    fireEvent.click(screen.getByLabelText(/terms/i));
    fireEvent.change(screen.getByLabelText(/gender/i), { target: { value: 'Male' } });
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/Submitting.../i)).toBeInTheDocument();
  });

  test("Hide Submit button after Submission", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Deo' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '8250948396' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'dev.rohit2001@gmail.com' } });
    fireEvent.click(screen.getByLabelText(/terms/i));
    fireEvent.change(screen.getByLabelText(/gender/i), { target: { value: 'Male' } });
    fireEvent.click(screen.getByText(/submit/i));

    await screen.findByText(/Thank you for submitting the form/i, {}, {timeout: 2000});
    expect(screen.queryByText('submit')).not.toBeInTheDocument();
  });
});

