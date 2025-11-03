import { useForm } from "react-hook-form";
import { CallbackFormSchema, type CallbackFormType } from "../schema/callbackRequestForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { callbackFormApi } from "../service/callbackFormRequest.api";


function useCallbackFormRequest() {
    const [successMsg, setSuccessMsg] = useState<string | null>(null); // 👈 Add state for success message
    const [loading, setLoading] = useState<boolean>(false);

  

    const form = useForm<CallbackFormType>({
        resolver: zodResolver(CallbackFormSchema),
        // defaultValues: { name: "", mobile: "", message: "" },
        mode: "onChange",          // Show error *only* after user leaves the field
        reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
    });
    const onSubmit = async (data: CallbackFormType) => {
        try {
            if (loading) return;
            setLoading(true);
            const res = await callbackFormApi.submit(data);
            form.reset();
            //   onSuccess();
            setSuccessMsg(res?.message);
            //   setSuccessOpen(true)
        } catch (err: any) {
            //   toast.error(err.message || "Submission failed");
        } finally {
            setLoading(false)
        }
    };

    return { form, onSubmit, successMsg, loading };
}

export default useCallbackFormRequest;

