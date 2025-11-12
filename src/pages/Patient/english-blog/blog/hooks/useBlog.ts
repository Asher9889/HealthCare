import { endPoints, api } from "@/api";
// import { type Blog } from "@/validations";

export async function getAllBlogs() {
  try {
    const { data } = await api.get(endPoints.getAllBlogs.url);
    return data?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBlog(slug: string){
  try {
    const { data } = await api.get(endPoints.getBlog.url.replace(":slug", slug))
    return data?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

