import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DynamicDialog, FormLabel, SelectCityInput } from "@/components";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MultiSelect } from "@/components/ui/multi-select"


import { Controller } from "react-hook-form";
// import { useDoctorApplicationForm } from "./hooks/useDoctorApplicationForm";

import { useState, useMemo } from "react";
// import { Spinner } from "../ui";

import { getRequiredFields } from "@/utils";
import { doctorApplicationSchema } from "./schema/application.schema";
import { useDoctorApplicationForm } from "./hooks/useDoctorApplicationForm";
import { Spinner } from "@/components/ui";
import { constantData } from "@/constants";
import React from "react";


// import { doctorApplicationSchema } from "./schema/doctorApplication.schema";

const DoctorApplicationForm = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
    const [loading, setLoading] = useState(false);
    const { form, onSubmit, dialog, setDialog } = useDoctorApplicationForm({ loading, setLoading });


    const requiredFields = useMemo(
        () => getRequiredFields(doctorApplicationSchema),
        []
    );

    const degress = constantData.doctorDegree.map((deg) => ({
        value: deg,
        label: deg,
    }));


    const handleDialogClose = () =>
        setDialog((prev: any) => ({ ...prev, open: false }));

    return (
        <>
            <Card ref={ref} className="rounded-2xl py-8 shadow-inner border border-transparent">
                <CardContent>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold text-slate-800">
                            Share your details and we will reach out
                        </h3>

                        {/* --- GRID LAYOUT --- */}
                        <div className="flex flex-col gap-6">

                            {/* NAME and Number*/}

                            <div className="w-full flex flex-col lg:flex-row gap-6">


                                <Controller
                                    control={form.control}
                                    name="name"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2 lg:col-span-2">
                                            <FormLabel htmlFor="name" required={requiredFields.name}>
                                                Your Name
                                            </FormLabel>
                                            <Input
                                                placeholder="Enter your full name"
                                                {...field}
                                                value={field.value}
                                            />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />


                                <Controller
                                    control={form.control}
                                    name="mobile"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="mobile" required={requiredFields.mobile}>
                                                Mobile Number
                                            </FormLabel>
                                            <Input
                                                placeholder="Enter 10-digit number"
                                                maxLength={10}
                                                {...field}
                                                value={field.value.trim()}
                                            />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />

                            </div>
                            {/* EMAIL */}
                            <div className="w-full flex flex-col lg:flex-row gap-6">


                                <Controller
                                    control={form.control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="email" required={requiredFields.email}>Email</FormLabel>
                                            <Input
                                                placeholder="Enter your email"
                                                {...field}
                                                value={field.value.trim()}
                                            />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />

                                {/* CITY */}
                                <Controller
                                    control={form.control}
                                    name="city"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="city" required={requiredFields.city}>City</FormLabel>
                                            <SelectCityInput {...field} />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>
                            {/* SPECIALIZATION & Degree */}
                            <div className="w-full flex flex-col lg:flex-row gap-6">


                                {/* Dropdown Trigger */}
                                <Controller
                                    control={form.control}
                                    name="specializations"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="specializations" required={requiredFields.specializations}>
                                                Specialization
                                            </FormLabel>

                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a specialization" />
                                                </SelectTrigger>
                                                <SelectContent className="w-full">
                                                    <SelectGroup>
                                                        <SelectLabel>Specialization</SelectLabel>
                                                        {constantData.doctorSpecialization.map((spec) => (
                                                            <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />
                                <Controller
                                    control={form.control}
                                    name="degree"
                                    render={({ field, fieldState }) => (
                                        <div className="relative  w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="degree" required={requiredFields.degree}>
                                                Degree
                                            </FormLabel>

                                            <MultiSelect
                                                options={degress}
                                                selected={degress.filter(option => field.value.includes(option.value))}
                                                onChange={(selectedOptions) => {
                                                    field.onChange(selectedOptions.map(opt => opt.value));
                                                }}
                                                placeholder="Select items..."
                                            />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>

                            <div className="w-full flex flex-col lg:flex-row gap-6">
                                {/* EXPERIENCE AFTER MBBS/BDS */}
                                <Controller
                                    control={form.control}
                                    name="expMbbs"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="expMbbs" required={requiredFields.expMbbs}>
                                                Experience (after MBBS/BDS)
                                            </FormLabel>
                                            <Input placeholder="Years" {...field} />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />

                                {/* EXPERIENCE AFTER PG */}
                                <Controller
                                    control={form.control}
                                    name="expPg"
                                    render={({ field, fieldState }) => (
                                        <div className="w-full flex flex-col gap-2">
                                            <FormLabel htmlFor="expPg" required={requiredFields.expPg}>
                                                Experience (after PG)
                                            </FormLabel>
                                            <Input placeholder="Years" {...field} />
                                            {fieldState.error && (
                                                <span className="text-red-500 text-sm">
                                                    {fieldState.error.message}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg"
                        >
                            {loading ? <Spinner /> : "Submit"}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* GLOBAL DIALOG */}
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
        </>
    );
});

DoctorApplicationForm.displayName = "DoctorApplicationForm";
export default DoctorApplicationForm;
