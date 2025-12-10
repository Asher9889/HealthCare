import { axiosInstance, endPoints } from "@/api";
import type { TDoctorApplicationFormValues } from "../schema/application.schema";

export const doctorApplicationApi = {
    submit: async (data: TDoctorApplicationFormValues) => {
        const changedData = {
            ...data,
            expMbbs: parseInt(data.expMbbs),
            expPg: data.expPg?.trim() ? parseInt(data.expPg) : null,
        }
        const res = await axiosInstance.request({
            url: endPoints.onboardingDoctor.url(),
            method: endPoints.onboardingDoctor.method,
            data: changedData
        })

        return res.data;
    },
};
