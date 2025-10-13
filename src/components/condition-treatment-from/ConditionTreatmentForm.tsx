import { motion } from "framer-motion"
import { Button, Card, CardContent, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Spinner } from "../ui"
import { Upload } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ConditionTreatmentFormValidation } from "@/validation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const uri = import.meta.env.VITE_API_BASE_URL;

interface ConditionTreatmentFormProps {
  cities: string[];
  selectedCity?: string;
  consultations?: string[];
  treatmentType?: string; // Add this line
}
const ConditionTreatmentForm = ({cities, selectedCity, consultations=["Clinic", "Online"]}: ConditionTreatmentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ConditionTreatmentFormValidation>>({
    resolver: zodResolver(ConditionTreatmentFormValidation),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      city: "",
      mode: "",
      image: undefined,
    },
  });

  useEffect(() => {
    if (selectedCity) {
      form.setValue("city", selectedCity.toLowerCase());
    }
  }, [selectedCity, form]);

  const onSubmit = async (data: z.infer<typeof ConditionTreatmentFormValidation>) => {
    try {
      if(isLoading) return;
      setIsLoading(true);
      const formData = new FormData();
    
      // Append all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'image' && value instanceof File) {
          formData.append('image', value);
        } else if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });
  
      const res = await fetch(`${uri}/user/condition/book-appointment`, {
        method: "POST",
        body: formData,
      });
      if(res.status !== 200){
        return toast.error("Failed to book your appoint. Please try again after 1 minute.")
      }

      const result = await res.json();
      toast.success(result.message);
    } catch (error) {
      console.error("❌ API Error:", error);
      toast.error("Failed to book your appoint. Please try again after 1 minute.")
    } finally {
      form.reset();
      setIsLoading(false);
    }
    
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
              <div className="grid md:grid-cols-2 gap-3">
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
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        inputMode="numeric"        // opens numeric keypad on mobile
                        placeholder="Enter your 10-digit phone number"
                        onInput={(e) => {
                          // restrict only to numbers while typing
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                          field.onChange(e); // update react-hook-form state
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500"/>
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
                  name="mode"
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
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="w-fit flex items-center gap-2 px-3 py-2 border rounded-md cursor-pointer text-gray-500 hover:bg-gray-50">
                      <Upload size={16} />
                      {!field.value && <span className="hidden md:inline text-nowrap">Tap to upload disease image</span> }
                     
                      <FormControl>
                        <input 
                          type="file" 
                          className={`w-[200px]`} 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);   // update react-hook-form state
                          }} 
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
                  className="w-[200px] bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  {isLoading ? <Spinner  className="" /> : "Submit & Get Callback"}
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