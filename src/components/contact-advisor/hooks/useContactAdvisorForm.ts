import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactAdvisorSchema, type ContactAdvisorFormData } from "../schema/contactAdvisor.schema";
import { contactAdvisorApi } from "../services/conatctAdvisor.api";
import { useState } from "react";

type UseContactAdvisorFormProps = {
  onSuccess: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setSuccessOpen: (successOpen: boolean) => void;
};

export const useContactAdvisorForm = ({onSuccess, loading, setLoading, setSuccessOpen}: UseContactAdvisorFormProps) => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null); // 👈 Add state for success message

  const form = useForm<ContactAdvisorFormData>({
    resolver: zodResolver(contactAdvisorSchema),
    defaultValues: { name: "", mobile: "", disease: "", city: "" },
    mode: "onChange",          // Show error *only* after user leaves the field
    reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
  });
  const onSubmit = async (data: ContactAdvisorFormData) => {
    try {
      if(loading) return;
      setLoading(true);
      const res = await contactAdvisorApi.submit(data);
      form.reset();
      onSuccess();
      setSuccessMsg(res?.message);
      setSuccessOpen(true)
    } catch (err: any) {
      toast.error(err.message || "Submission failed");
    } finally {
      setLoading(false)
    }
  };

  return { form, onSubmit, successMsg };
};