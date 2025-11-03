import { motion } from "framer-motion";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DynamicDialog, SelectCityInput } from "@/components";
import { FormLabel } from "@/components";
import useCallbackFormRequest from "./hooks/useCallbackFormRequest";
import { SelectItem, SelectTrigger, SelectValue, SelectContent, Select, Spinner } from "../ui";
import { helpTypeValues } from "./schema/callbackRequestForm.schema";

export default function CallbackRequestForm() {
  const { form, onSubmit, loading, dialog, setDialog } = useCallbackFormRequest();

  const handleDialogClose = () => setDialog((prev) => ({ ...prev, open: false }));

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-100 rounded-2xl p-8 shadow-sm"
    >
      <div className="space-y-2 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--dark-blue-color)]">
          Request a Callback
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Share your details and our patient care expert will call you within 10 minutes.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* Name + Mobile */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <FormLabel required htmlFor="name">Name</FormLabel>
            <Controller
              control={form.control}
              name="name"
              render={(({ field, fieldState }) => {
                return (
                  <div>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className="rounded-xl border-gray-300 bg-white"
                    />
                    {fieldState.error && <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>}
                  </div>
                )
              })}
            />
          </div>

          <div className="space-y-2">
            <FormLabel required htmlFor="mobile">Mobile Number</FormLabel>
            <Controller
              control={form.control}
              name="mobile"
              render={(({ field, fieldState }) => {
                return (
                  <div>
                  <Input
                    placeholder="Your mobile number"
                    type="tel"
                    {...field}
                    value={field.value?.replace(/[^0-9]/g, "")}
                    maxLength={10}
                    className="rounded-xl border-gray-300 bg-white"
                  />
                  {fieldState.error && <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>}
                  </div>
                )
              })}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <FormLabel required htmlFor="city">City</FormLabel>
            <Controller
              control={form.control}
              name="city"
              render={(({ field, fieldState }) => {
                return (
                  <div>
                  <SelectCityInput
                    {...field}
                    className="bg-white"
                  />
                  {fieldState.error && <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>}
                  </div>
                )
              })}
            />
          </div>

          <div className="space-y-2">
            <FormLabel required htmlFor="helpType">Type of Help</FormLabel>
            <Controller
              name="helpType"
              control={form.control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full text-start bg-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {helpTypeValues.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {form.formState.errors.helpType && <p className="text-sm text-red-500 mt-1">{form.formState.errors.helpType?.message}</p>}
          </div>

        </div>

        <div className="space-y-2">
          <FormLabel required htmlFor="message">Message</FormLabel>
          <Controller
            control={form.control}
            name="message"
            render={(({ field, fieldState }) => {
              return (
                <div>
                <Textarea
                  placeholder="Briefly describe your query"
                  rows={5}
                  {...field}
                  className="rounded-xl border-gray-300 resize-none bg-white"
                />
                {fieldState.error && <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>}
                </div>
              )
            })}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold h-11"
          disabled={loading}
        >
          {loading? <Spinner /> : "Submit Request"}
        </Button>
        <DynamicDialog 
          open={dialog.open}
          onClose={handleDialogClose}
          type={dialog.type}
          title={dialog.title}
          message={dialog.message}
          primaryAction={{
            label: "Close",
            onClick: handleDialogClose
          }}
        />
      </form>
    </motion.section>
  );
}
