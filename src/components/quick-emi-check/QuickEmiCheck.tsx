import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DynamicDialog, FormLabel, SelectCityInput } from "@/components";
import { Controller } from "react-hook-form";
import { useQuickEmiCheckForm } from "./hooks/useQuickEmiCheckForm";
import { useMemo, useState } from "react";
import { getRequiredFields } from "@/utils";
import { quickEmiCheckSchema } from "./schema/quickEmiCheck.schema";
import { Spinner } from "../ui";

const QuickEmiCheck = ({heading}: {heading?: string}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const { form, onSubmit,  dialog, setDialog } = useQuickEmiCheckForm({
        loading,
        setLoading,
    }
    );

    const handleDialogClose = () => setDialog((prev) => ({ ...prev, open: false }));

    const requiredFields: Record<"name" | "city" | "mobile" | "disease" | "estimatedCost" | "tenure", boolean> = useMemo(
        () => getRequiredFields(quickEmiCheckSchema),
        []
    );
    return (
        <div>
            <Card className="rounded-2xl border-none shadow-inner">
                <CardContent className="">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-4">
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
                                            {...field} value={field.value.trim()}
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
                                            {...field} value={field.value.trim()}
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
                                            {...field} value={field.value.trim()}
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
                                            <FormLabel htmlFor="estimatedCost" required={requiredFields.estimatedCost}>Estimated Cost</FormLabel>
                                            <Input id="estimatedCost" placeholder="₹ e.g., 75,000"
                                                {...field} value={field.value?.toString()?.trim()}
                                            />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>
                            <Controller
                                control={form.control}
                                name="tenure"
                                render={({ field, fieldState }) => (
                                    <div className="grid gap-2">
                                        <FormLabel htmlFor="tenure" required={requiredFields.tenure}>Preferred Tenure</FormLabel>
                                        <Input  id="tenure" placeholder="3 / 6 / 9 / 12 months" {...field} value={field.value?.trim()} />
                                        {fieldState.error && (
                                            <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <Button
                            disabled={loading}
                            type="submit"
                            size="lg"
                            className="w-full bg-[var(--primary-bg-color)] hover:bg-[var(--dark-blue-color)] text-white font-medium"
                        >
                            {loading ? <Spinner /> : "Check EMI Eligibility"}
                        </Button>
                        
                    </form>
                    <p className="text-xs text-[var(--text-light)] text-center">
                        No documents needed to start. Instant callback in 10 minutes.
                    </p>
                </CardContent>
            </Card>
            <DynamicDialog
                open={dialog.open}
                onClose={handleDialogClose}
                type={dialog.type}
                title={dialog.title}
                message={dialog.message}
                primaryAction={{
                    label: "Close",
                    onClick: handleDialogClose,
                }}
            />
        </div>
    )
}

export default QuickEmiCheck
