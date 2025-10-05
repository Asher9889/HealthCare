import * as z from "zod";

export const ConditionTreatmentFormValidation = z.object({
  fullName: z
    .string()
    .min(4, { message: "Full name must be at least 4 characters long" })
    .max(50, { message: "Full name must not exceed 50 characters" }),

    mobileNumber: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(10, { message: "Phone number must not exceed 10 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits" })
    ,
  city: z.string().min(1, { message: "Please select your city" }),
  mode: z.string().min(1, { message: "Please select consultation type" }),

  image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 10 * 1024 * 1024,
      { message: "File size must be less than 10MB" }
    )
    .refine(
      (file) => ["image/jpeg", "image/png"].includes(file.type),
      { message: "Only JPG or PNG files are supported" }
    )
    .optional()
    .or(z.undefined())
});
