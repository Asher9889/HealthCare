import type { QuickEmiCheckFormData } from "../schema/quickEmiCheck.schema";
import { axiosInstance, endPoints } from "@/api";

export const quickEmiCheckApi = {
  submit: async (data: QuickEmiCheckFormData) => {
    const res = await axiosInstance.request({
        url: endPoints.quickEmiCheck.url(),
        method: endPoints.quickEmiCheck.method,
        data: {
          ...data,
          estimatedCost: data.estimatedCost ? Number(data.estimatedCost) : undefined,
          tenure: data.tenure ? Number(data.tenure) : undefined,
        }
    })

    return res.data;
  },
};