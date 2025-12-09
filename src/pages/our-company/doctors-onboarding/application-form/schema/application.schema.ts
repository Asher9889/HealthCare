import { z } from "zod";

export const doctorApplicationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Full name is required")
        .max(80, "Name too long"),

    mobile: z
        .string()
        .trim()
        .regex(/^[6789][0-9]{9}$/, "Mobile number must be 10 digits indian number"),

    email: z
        .string()
        .trim()
        .email("Enter a valid email")
        .min(1, "Email is required"),

    city: z.string().min(1, "City is required"),

    specializations: z.string({ required_error: "Specialization is required" }).min(1, "Select at least one specialization"),
    degree: z
        .array(z.string({ required_error: "Degree is required" }))
        .min(1, "Select at least one degree"),
    expMbbs: z
        .string({ required_error: "Experience is required" })
        .min(1, "Experience is required")
        .refine(
            (val) => !val || /^[0-9]+$/.test(val),
            "Experience must be a number"
        ),

    expPg: z
        .string({ required_error: "Experience is required" })
        .refine(
            (val) => !val || /^[0-9]+$/.test(val),
            "Experience must be a number"
        )
        .optional()
});

export type TDoctorApplicationFormValues = z.infer<
    typeof doctorApplicationSchema
>;
