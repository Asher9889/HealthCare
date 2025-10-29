// utils/getRequiredFields.ts
import { ZodObject, ZodOptional } from "zod";

export function getRequiredFields<T extends ZodObject<any>>(schema: T) {
  const requiredMap: Record<string, boolean> = {};

  for (const key in schema.shape) {
    const field = schema.shape[key];
    requiredMap[key] = !(field instanceof ZodOptional);
  }

  return requiredMap;
}

export default getRequiredFields;
