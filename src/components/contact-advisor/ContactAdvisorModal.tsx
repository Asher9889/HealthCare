import { useEffect, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormLabel, SelectCityInput } from "@/components";
import { useContactAdvisorForm } from "./hooks/useContactAdvisorForm";
import { getRequiredFields } from "@/utils";
import { contactAdvisorSchema } from "./schema/contactAdvisor.schema";

type ContactAdvisorModalProps = {
  openBtnText?: string;
  heading1?: string;
  heading2?: string;
  className?: string;
  submitBtnText?: string;
};

export default function ContactAdvisorModal({
  heading1,
  heading2,
  className,
  openBtnText,
  submitBtnText,
}: ContactAdvisorModalProps) {
  const [open, setOpen] = useState(false);
  const { form, onSubmit } = useContactAdvisorForm(() => setOpen(false));

    // ✅ Precompute once (memoized)
  const requiredFields: Record<"name" | "city" | "mobile" | "disease", boolean> = useMemo(
    () => getRequiredFields(contactAdvisorSchema),
    []
  );

  useEffect(()=> {
    return () => {
      form.reset();
    }
  },[open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-(--orange-button-color) text-white ${className}`}>
          {openBtnText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white rounded-2xl shadow-lg border border-(--sidebar-border-color)">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-(--text-primary)">
            {heading1}
          </DialogTitle>
          <DialogDescription className="text-(--text-secondary)">
            {heading2}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4 mt-4">
          {/* Name */}
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <div className="grid gap-2">
                <FormLabel htmlFor="name" required={requiredFields.name}>Full Name</FormLabel>
                <Input className="font-normal text-sm" id="name" placeholder="Enter your full name"
                  {...field} 
                />
                {fieldState.error && (
                  <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                )}
              </div>
            )} 
          />

          {/* City */}  
          <Controller
            control={form.control}
            name="city"
            render={({ fieldState }) => (
          <div className="grid gap-2">
            <FormLabel htmlFor="city" required={requiredFields.city}>City</FormLabel>
            <SelectCityInput
              value={form.watch("city")}
              onChange={(city) => form.setValue("city", city)}
            />
            {fieldState.error && (
              <span className="text-red-500 text-sm">{fieldState.error.message}</span>
            )}
          </div>
            )}
          />
      
          {/* Mobile */}
          <Controller
            control={form.control}
            name="mobile"
            render={({ field, fieldState }) => (
              <div className="grid gap-2">
                <FormLabel htmlFor="mobile" required={requiredFields.mobile}>Mobile Number</FormLabel>
                <Input id="mobile" maxLength={10} type="tel" {...field} className="font-normal text-sm"
                 placeholder="Enter 10-digit mobile number"
                 {...field}
                 />
                {fieldState.error && (
              <span className="text-red-500 text-sm">{fieldState.error.message}</span>
            )}
          </div>
            )}
          />

          {/* Disease */}
          <Controller
            control={form.control}
            name="disease"
            render={({ field, fieldState }) => (
              <div className="grid gap-2">
                <FormLabel htmlFor="disease" required={requiredFields.disease}>Treatment / Surgery Name</FormLabel>
                <Textarea id="disease" {...field} placeholder="e.g., Fissure Surgery" className="font-normal text-sm"
                  {...field}
                />
                {fieldState.error && (
                  <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
          <Button type="submit" className="w-full bg-(--primary-bg-color) text-white font-semibold rounded-xl hover:opacity-90">
            {submitBtnText || "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
