import * as z from "zod";

export const quickEmiCheckSchema = z.object({
  name: z
    .string({ required_error: "Please enter your full name" })
    .trim()
    .min(4, "Name must be at least 4 characters long")
    .max(50, "Name must be at most 50 characters long")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters"),

  mobile: z
    .string({ required_error: "Please enter your mobile number" })
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),

  city: z
    .string({ required_error: "Please select your city" })
    .trim()
    .min(2, "Please select your city")
    .max(50, "City name must be at most 50 characters long")
    .regex(/^[a-zA-Z\s]+$/, "City must contain only letters and spaces"),

  disease: z
    .string()
    .trim()
    .max(50, "Disease name must be at most 50 characters long")
    .regex(/^[a-zA-Z\s]+$/, "Disease name must contain only letters and spaces"),

  estimatedCost: z
    .string()
    .trim()
    .refine(
      (val) => val === undefined || val === "" || /^[0-9]+$/.test(val),
      "Must contain only numbers"
    )
    .optional(), 

  tenure: z
    .string()
    .trim()
    .refine(
      (val) =>
        val === undefined ||
      val === "" ||
      (/^[0-9]+$/.test(val) && [3, 6, 9, 12].includes(Number(val))),
      "Please enter a valid tenure (3, 6, 9, or 12 months)"
    )
    .optional()
});

export type QuickEmiCheckFormData = z.infer<typeof quickEmiCheckSchema>;
