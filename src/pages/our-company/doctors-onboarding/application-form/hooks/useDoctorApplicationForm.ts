import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctorApplicationSchema, type TDoctorApplicationFormValues } from "../schema/application.schema";
import { useState } from "react";
import { doctorApplicationApi } from "../services/doctorApplication.api";

type UseDoctorApplicationFormProps = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

export const useDoctorApplicationForm = ({
    loading,
    setLoading,
}: UseDoctorApplicationFormProps) => {
    const [dialog, setDialog] = useState({
        open: false,
        type: "success" as "success" | "error" | "info",
        title: "",
        message: "",
    });

    const form = useForm<TDoctorApplicationFormValues>({
        resolver: zodResolver(doctorApplicationSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            city: "",
            specializations: "",
            degree: [],   // <-- must be an empty array
            expMbbs: "",
            expPg: "",
        },
        mode: "onChange",
        reValidateMode: "onChange",
    });

    // ...

    /**
     * Handles form submission
     */
    const onSubmit = async (data: TDoctorApplicationFormValues) => {
        try {
            if (loading) return;

            setLoading(true);

            // --- API CALL ---
            const res = await doctorApplicationApi.submit(data);
            console.log("Doctor Application Form Response:", res);

            form.reset();

            setDialog({
                open: true,
                type: "success",
                title: "Success!",
                message: res.message || "Form submitted successfully!",
            });
        } catch (err: any) {
            setDialog({
                open: true,
                type: "error",
                title: "Submission Failed",
                message:
                    err?.message ||
                    "Something went wrong while submitting the form.",
            });
        } finally {
            setLoading(false);
        }
    };

    return {
        form,
        onSubmit,
        dialog,
        setDialog,
    };
};
