import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import type { BlogDoc } from "./BlogList";
import {  readingTimeFromHtml } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { getBlog } from "./hooks/useBlog";

export default function BlogViewPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<BlogDoc | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getBlog(slug!!);
      setBlog(blog);
    };
    fetchBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="mt-2 text-muted-foreground">Could not find blog with slug: {slug}</p>
        <div className="mt-4">
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>
      </div>
    );
  }

  const createdAt = typeof blog.createdAt === "object" ? blog.createdAt.$date : blog.createdAt;
  const dateStr = createdAt ? new Date(createdAt).toLocaleDateString() : "";
  const readTime = readingTimeFromHtml(blog.content);

  return (
    <main className="max-w-7xl mx-auto p-6">
      {blog.featuredImage && (
        <img src={blog.featuredImage} alt={blog.title} className="w-full h-72 object-cover rounded-lg mb-6" />
      )}

      <h1 className="text-4xl font-extrabold leading-tight">{blog.title}</h1>

      <div className="mt-3 text-sm text-muted-foreground flex items-center gap-3">
        <span>{blog.author ?? "Unknown"}</span>
        <span>•</span>
        <time>{dateStr}</time>
        <span>•</span>
        <span>{readTime}</span>
      </div>

      <div className="mt-6 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: blog.content }} />

      <footer className="mt-12 flex items-center justify-between">
        <div className="flex gap-2">
          <Button onClick={() => navigate(-1)}>Back</Button>
          {/* <Button asChild><Link to="/blogs">All posts</Link></Button> */}
        </div>

        {/* <div className="text-sm text-muted-foreground">Share: add share icons</div> */}
      </footer>
    </main>
  );
}
