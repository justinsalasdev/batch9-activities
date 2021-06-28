import { useRef } from "react";
export default function useForm() {
  const {
    current: { formData, formErrors }
  } = useRef({ formData: {}, formErrors: {} });

  return [formData, formErrors];
}
