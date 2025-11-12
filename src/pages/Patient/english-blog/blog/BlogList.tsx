import { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import { getAllBlogs } from "./hooks/useBlog";

export type BlogDoc = {
  title: string;
  slug: string;
  summary?: string;
  featuredImage?: string;
  author: string;
  content: string; // HTML from TipTap
  createdAt?: any;
  updatedAt?: any;
};


export default function BlogList() {
  const [blogsData, setBlogsData] = useState<BlogDoc[]>([]);

  const fetchBlog = async () => {
    const blogsData = await getAllBlogs();
    console.log("blogsData", blogsData)
    setBlogsData(blogsData)
  }
  useEffect(()=> {
    fetchBlog()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Blogs</h1>
          <p className="text-muted-foreground mt-1">Latest articles, guides and hospital updates</p>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsData?.map((b) => (
          <BlogCard key={b.slug} blog={b} />
        ))}
      </section>
    </div>
  );
}
