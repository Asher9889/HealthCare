import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { quickEmiCheckSchema, type QuickEmiCheckFormData } from "../schema/quickEmiCheck.schema";
import { quickEmiCheckApi } from "../service/quickEmiCheck.api";
import { useState } from "react";

type useQuickEmiCheckFormProps = {
  onSuccess: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setSuccessOpen: (successOpen: boolean) => void;
};

export const useQuickEmiCheckForm = ({onSuccess, loading, setLoading, setSuccessOpen}: useQuickEmiCheckFormProps) => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null); // 👈 Add state for success message

  const form = useForm<QuickEmiCheckFormData>({
    resolver: zodResolver(quickEmiCheckSchema),
    defaultValues: { name: "", mobile: "", disease: "", city: "", estimatedCost: 0, tenure: 3 },
    mode: "onChange",          // Show error *only* after user leaves the field
    reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
  });
  const onSubmit = async (data: QuickEmiCheckFormData) => {
    try {
      if(loading) return;
      setLoading(true);
      const res = await quickEmiCheckApi.submit(data);
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