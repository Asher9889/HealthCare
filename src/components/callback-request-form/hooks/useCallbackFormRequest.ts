import { useForm } from "react-hook-form";
import { CallbackFormSchema, type CallbackFormType } from "../schema/callbackRequestForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { callbackFormApi } from "../service/callbackFormRequest.api";


function useCallbackFormRequest() {
    const [loading, setLoading] = useState<boolean>(false);
    const [dialog, setDialog] = useState({
        open: false,
        type: "success" as "success" | "error" | "info",
        title: "",
        message: "",
    });

    const form = useForm<CallbackFormType>({
        resolver: zodResolver(CallbackFormSchema),
        defaultValues: { name: "", mobile: "", message: "", helpType: undefined, city: undefined },
        mode: "onChange",          // Show error *only* after user leaves the field
        reValidateMode: "onChange", // Revalidate live as user types — hides error once valid
    });
    
    const onSubmit = async (data: CallbackFormType) => {
        try {
            if (loading) return;
            setLoading(true);
            const res = await callbackFormApi.submit(data);
            setDialog({
                open: true,
                type: "success",
                title: "Success!",
                message: res?.message,
            })
            form.reset({
                name: "",
                mobile: "",
                message: "",
                helpType: undefined,
                city: undefined,
            });
        } catch (err: any) {
            setDialog({
                open: true,
                type: "error",
                title: "Submission Failed",
                message: err.message || "Something went wrong while submitting the form.",
           })
        } finally {
            setLoading(false)
        }
    };

    return { form, onSubmit, loading, dialog, setDialog };
}

export default useCallbackFormRequest;

