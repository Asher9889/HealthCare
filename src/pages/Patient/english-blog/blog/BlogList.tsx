import { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import { getAllBlogs } from "./hooks/useBlog";
import { type JSONContent } from "@tiptap/react";
import { Skeleton } from "@/components/ui/skeleton";
export type BlogDoc = {
  title: string;
  slug: string;
  summary?: string;
  featuredImage?: string;
  author: string;
  content: JSONContent; // HTML from TipTap
  createdAt?: any;
  updatedAt?: any;
};


export default function BlogList() {
  const [blogsData, setBlogsData] = useState<BlogDoc[]>([]);

  const fetchBlog = async () => {
    const blogsData = await getAllBlogs();
    setBlogsData(blogsData)
  }
  useEffect(() => {
    fetchBlog()
  }, [])




  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-(--text-primary)">Blogs</h1>
          <p className="text-muted-foreground mt-1">Latest articles, guides and hospital updates</p>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsData && blogsData.length > 0 ? blogsData?.map((b) => (
          <BlogCard key={b.slug} blog={b} />
        )) : <Dummy />}
      </section>
    </div>
  );
}

const Dummy = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 my-12">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-60 w-96 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-60 w-96 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-60 w-96 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  )
}