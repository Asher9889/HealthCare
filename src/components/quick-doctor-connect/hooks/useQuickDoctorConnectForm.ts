import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quickDoctorConnectSchema, type QuickDoctorConnectFormData } from "../schema/quickDoctorConnect";
import { quickDoctorConnectApi } from "../services/quickDoctorConnect.api";
import { useState } from "react";


type useQuickDoctorConnectFormProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useQuickDoctorConnectForm = ({ loading, setLoading}: useQuickDoctorConnectFormProps) => {
  const [dialog, setDialog] = useState({
    open: false,
    type: "success" as "success" | "error" | "info",
    title: "",
    message: "",
  });

  const form = useForm<QuickDoctorConnectFormData>({
    resolver: zodResolver(quickDoctorConnectSchema),
    defaultValues: { doctorName: "", mobile: "", disease: "", city: "", mail: "" },
    mode: "onChange",          // Show error *only* after user leaves the field
    reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
  });
  const onSubmit = async (data: QuickDoctorConnectFormData) => {
    try {
      if(loading) return;
      setLoading(true);
      const res = await quickDoctorConnectApi.submit(data);
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