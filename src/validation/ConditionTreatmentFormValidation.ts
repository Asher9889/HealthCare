import * as z from "zod";

export const ConditionTreatmentFormValidation = z.object({
  fullName: z
    .string()
    .min(4, { message: "Full name must be at least 4 characters long" })
    .max(50, { message: "Full name must not exceed 50 characters" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits" }),

  city: z.string().min(1, { message: "Please select your city" }),
  consultation: z.string().min(1, { message: "Please select consultation type" }),

  upload: z
    .any()
    .refine((file) => file?.[0] && file[0].size <= 10 * 1024 * 1024, {
      message: "File size must be less than 10MB",
    })
    .refine(
      (file) =>
        file?.[0] &&
        ["image/jpeg", "image/png"].includes(file[0].type),
      {
        message: "Only JPG or PNG files are supported",
      }
    )
    .optional(),
});
