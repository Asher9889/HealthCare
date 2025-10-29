import type { ContactAdvisorFormData } from "../schema/contactAdvisor.schema";
import { axiosInstance, endPoints } from "@/api";

export const contactAdvisorApi = {
  submit: async (data: ContactAdvisorFormData) => {
    const res = await axiosInstance.request({
        url: endPoints.contactAdvisor.url(),
        method: endPoints.contactAdvisor.method,
        data
    })

    return res.data;
  },
};