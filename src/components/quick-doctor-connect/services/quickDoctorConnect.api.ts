import type { QuickDoctorConnectFormData } from "../schema/quickDoctorConnect";
import { axiosInstance, endPoints } from "@/api";

export const quickDoctorConnectApi = {
  submit: async (data: QuickDoctorConnectFormData) => {
    const res = await axiosInstance.request({
        url: endPoints.quickDoctorConnect.url(),
        method: endPoints.quickDoctorConnect.method,
        data
    })

    return res.data;
  },
};