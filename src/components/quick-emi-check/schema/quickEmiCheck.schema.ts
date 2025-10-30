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
    .optional(),

  estimatedCost: z
    .union([
      z.string().regex(/^[0-9,]+$/, "Estimated cost must contain only numbers"),
      z.number(),
    ])
    .optional(),

  tenure: z
    .union([
      z.literal(3),
      z.literal(6),
      z.literal(9),
      z.literal(12),
    ])
    .optional()
    .refine((val) => val === undefined || [3, 6, 9, 12].includes(val), {
      message: "Please enter a valid tenure (3, 6, 9, or 12 months)",
    }),
});

export type QuickEmiCheckFormData = z.infer<typeof quickEmiCheckSchema>;
