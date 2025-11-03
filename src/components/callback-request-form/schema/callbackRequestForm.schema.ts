
import { constantData } from "@/constants";
import z from "zod";

const cities = constantData.citiesLiteral;
export const helpTypeValues = ["Treatment", "Surgery", "Medicine", "Other"] as const;
export const CallbackFormSchema = z.object({
  name: z.string({required_error: "Name is required"})
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .regex(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces"),
  
  mobile: z.string({required_error: "Mobile number is required"})
    .trim()
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  
  city: z.enum(cities, {
    required_error: "City is required",
  }),

  
  helpType: z.enum(helpTypeValues, {
    required_error: "Type of Help is required",
  }),

  message: z.string({required_error: "Message is required"})
    .trim()
    .min(2, "Message must be at least 2 characters long")
    .max(500, "Message must be at most 500 characters long")
});


export type CallbackFormType = z.infer<typeof CallbackFormSchema>