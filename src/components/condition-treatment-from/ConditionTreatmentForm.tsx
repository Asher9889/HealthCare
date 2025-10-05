import { motion } from "framer-motion"
import { Button, Card, CardContent, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui"
import { Upload } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import PhoneInput from "../phone-input/PhoneInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ConditionTreatmentFormValidation } from "@/validation";
import { useEffect } from "react";

const ConditionTreatmentForm = ({cities, selectedCity, consultations=["Clinic", "Online"]}: {cities: string[], selectedCity:string, consultations?: string[]}) => {
  const form = useForm<z.infer<typeof ConditionTreatmentFormValidation>>({
    resolver: zodResolver(ConditionTreatmentFormValidation),
    defaultValues: {
      fullName: "",
      phone: "",
      city: "",
      consultation: "",
      upload: undefined,
    },
  });

  useEffect(() => {
    if (selectedCity) {
      form.setValue("city", selectedCity.toLowerCase());
    }
  }, [selectedCity, form]);

  const onSubmit = (data: z.infer<typeof ConditionTreatmentFormValidation>) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Book Free Consultation
              </h2>

              {/* Name + Mobile */}
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <PhoneInput
                          {...field}
                          defaultCountry="IN"
                          className="text-[var(--color-text-primary)]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              {/* City + Consultation */}
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city.toLowerCase()}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consultation"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Clinic / Online" />
                          </SelectTrigger>
                          <SelectContent>
                            {consultations.map((c) => (
                              <SelectItem key={c} value={c.toLowerCase()}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Upload */}
              <FormField
                control={form.control}
                name="upload"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 px-3 py-2 border rounded-md cursor-pointer text-gray-500 hover:bg-gray-50">
                      <Upload size={16} />
                      <span>Tap to upload image</span>
                      <FormControl>
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </FormControl>
                    </FormLabel>
                    <p className="text-xs text-gray-400">
                      Supported: JPG, PNG. Max 10MB.
                    </p>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" className="rounded-xl">
                  More Info
                </Button>
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  Submit & Get Callback
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </motion.div>
  )
}

export default ConditionTreatmentForm;