import { useState, ChangeEvent } from "react";

// Define a generic type T for form values
const useForm = <T extends Record<string, any>>(initialFormValues: T) => {
  const [form, setForm] = useState<T>(initialFormValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;

    let newValue: any;
    if (event.target instanceof HTMLInputElement && type === "checkbox") {
      newValue = event.target.checked;
    } else {
      newValue = value;
    }

    setForm({ ...form, [name]: newValue });
  };

  const updateValue = (key: keyof T, value: any) => {
    setForm({ ...form, [key]: value });
  };

  return { form, setForm, handleChange, updateValue };
};

export default useForm;
