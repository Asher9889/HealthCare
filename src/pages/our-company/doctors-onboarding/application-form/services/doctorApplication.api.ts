import { axiosInstance, endPoints } from "@/api";
import type { TDoctorApplicationFormValues } from "../schema/application.schema";

export const doctorApplicationApi = {
    submit: async (data: TDoctorApplicationFormValues) => {
        const res = await axiosInstance.request({
            url: endPoints.onboardingDoctor.url(),
            method: endPoints.onboardingDoctor.method,
            data
        })

        return res.data;
    },
};
