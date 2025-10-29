import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactAdvisorSchema, type ContactAdvisorFormData } from "../schema/contactAdvisor.schema";
import { contactAdvisorApi } from "../services/conatctAdvisor.api";

export const useContactAdvisorForm = (onSuccess?: () => void) => {
  const form = useForm<ContactAdvisorFormData>({
    resolver: zodResolver(contactAdvisorSchema),
    defaultValues: { name: "", mobile: "", disease: "", city: "" },
    mode: "onTouched",          // Show error *only* after user leaves the field
    reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
  });

  const onSubmit = async (data: ContactAdvisorFormData) => {
    try {
      console.log("dat ios", data)
      const res = await contactAdvisorApi.submit(data);
      toast.success(res.message || "Form submitted successfully!");
      form.reset();
      onSuccess?.();
    } catch (err: any) {
      toast.error(err.message || "Submission failed");
    }
  };

  return { form, onSubmit };
};
