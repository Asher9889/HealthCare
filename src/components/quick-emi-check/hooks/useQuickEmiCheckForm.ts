import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quickEmiCheckSchema, type QuickEmiCheckFormData } from "../schema/quickEmiCheck.schema";
import { quickEmiCheckApi } from "../service/quickEmiCheck.api";
import { useState } from "react";


type useQuickEmiCheckFormProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useQuickEmiCheckForm = ({ loading, setLoading}: useQuickEmiCheckFormProps) => {
  const [dialog, setDialog] = useState({
    open: false,
    type: "success" as "success" | "error" | "info",
    title: "",
    message: "",
  });

  const form = useForm<QuickEmiCheckFormData>({
    resolver: zodResolver(quickEmiCheckSchema),
    defaultValues: { name: "", mobile: "", disease: "", city: "", estimatedCost: "", tenure: "" },
    mode: "onChange",          // Show error *only* after user leaves the field
    reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
  });
  const onSubmit = async (data: QuickEmiCheckFormData) => {
    try {
      if(loading) return;
      setLoading(true);
      const res = await quickEmiCheckApi.submit(data);
      form.reset();
      setDialog({
        open: true,
        type: "success",
        title: "Success!",
        message: res?.message,
      })
    } catch (err: any) {
       setDialog({
        open: true,
        type: "error",
        title: "Submission Failed",
        message: err.message || "Something went wrong while submitting the form.",
      });
    } finally {
      setLoading(false)
    }
  };

  return { form, onSubmit,  dialog, setDialog };
};