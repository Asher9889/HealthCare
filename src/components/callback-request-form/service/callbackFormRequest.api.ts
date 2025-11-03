import type { CallbackFormType } from "../schema/callbackRequestForm.schema";
import { axiosInstance, endPoints } from "@/api";

export const callbackFormApi = {
  submit: async (data: CallbackFormType) => {
    const res = await axiosInstance.request({
        url: endPoints.callbackForm.url,
        method: endPoints.callbackForm.method,
        data
    })

    return res.data;
  },
};