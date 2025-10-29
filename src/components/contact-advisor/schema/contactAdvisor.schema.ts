import * as z from "zod";


export const contactAdvisorSchema = z.object({
    name: z
    .string({required_error:"Please enter your full name"})
    .trim()
    .min(4, "Please enter your full name")
    .max(50, "Name must be at most 50 characters long")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters"),

    city: z
    .string({required_error:"Please select your city"})
    .trim()
    .min(2, "Please select your city")
    .max(50, "City must be at most 50 characters long")
    .regex(/^[a-zA-Z ]+$/, "City must contain only letters and spaces"),

    mobile: z
    .string({required_error:"Please enter your mobile number"})
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),

    disease: z
    .string({required_error:"Please enter the treatment or surgery name"})
    .trim()
    .min(2, "Please enter the treatment or surgery name")
    .max(50, "Disease must be at most 50 characters long")
});

export type ContactAdvisorFormData = z.infer<typeof contactAdvisorSchema>