import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormLabel, SelectCityInput } from "@/components";
import { Controller } from "react-hook-form";
import { useQuickEmiCheckForm } from "./hooks/useQuickEmiCheckForm";
import { useMemo, useState } from "react";
import { getRequiredFields } from "@/utils";
import { quickEmiCheckSchema } from "./schema/quickEmiCheck.schema";

const QuickEmiCheck = ({heading}: {heading?: string}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isSuccessOpen, setSuccessOpen] = useState<boolean>(false);

    const { form, onSubmit, successMsg } = useQuickEmiCheckForm({
        onSuccess: () => setOpen(false),
        loading,
        setLoading,
        setSuccessOpen
    }
    );

    const requiredFields: Record<"name" | "city" | "mobile" | "disease" | "estimatedCost" | "tenure", boolean> = useMemo(
        () => getRequiredFields(quickEmiCheckSchema),
        []
    );
    return (
        <div>
            <Card className="rounded-2xl border-none shadow-inner">
                <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--dark-blue-color)]">
                        { heading }
                    </h3>

                    <div className="space-y-2">
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
                    </div>
                    <div className="space-y-2">
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
                    </div>

                    <div className="space-y-2">
                        {/* City */}
                        <Controller
                            control={form.control}
                            name="city"
                            render={({ field, fieldState }) => (
                                <div className="grid gap-2">
                                    <FormLabel htmlFor="city" required={requiredFields.city}>City</FormLabel>
                                    <SelectCityInput
                                        {...field}
                                    />
                                    {fieldState.error && (
                                        <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div className="space-y-2">
                        <Controller
                            control={form.control}
                            name="disease"
                            render={({ field, fieldState }) => (
                                <div className="grid gap-2">
                                    <FormLabel htmlFor="disease" required={requiredFields.disease}>Treatment / Surgery Name</FormLabel>
                                    <Input id="disease" placeholder="e.g., Hernia, Gallbladder"
                                        {...field}
                                    />
                                    {fieldState.error && (
                                        <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <Controller
                                control={form.control}
                                name="estimatedCost"
                                render={({ field, fieldState }) => (
                                    <div className="grid gap-2">
                                        <FormLabel htmlFor="estimatedCost" required={requiredFields.estimatedCost}>Estimated Cost (optional)</FormLabel>
                                        <Input id="estimatedCost" placeholder="₹ e.g., 75,000"
                                            {...field}
                                        />
                                        {fieldState.error && (
                                            <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <FormLabel htmlFor="tenure">Preferred Tenure</FormLabel>
                            <Input id="tenure" placeholder="3 / 6 / 9 / 12 months" />
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="w-full bg-[var(--primary-bg-color)] hover:bg-[var(--dark-blue-color)] text-white font-medium"
                    >
                        Check EMI Eligibility
                    </Button>

                    <p className="text-xs text-[var(--text-light)] text-center">
                        No documents needed to start. Instant callback in 10 minutes.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuickEmiCheck
