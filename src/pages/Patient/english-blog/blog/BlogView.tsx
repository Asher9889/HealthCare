import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { BlogDoc } from "./BlogList";
import { Button } from "@/components/ui/button";
import { getBlog } from "./hooks/useBlog";
import { ReadOnlyTipTap } from "@/components";
import {  readingTimeFromJSON } from "@/utils/editorContent";

import { Skeleton } from "@/components/ui/skeleton";

export function BlogDetailSkeleton() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Featured Image */}
      <Skeleton className="w-full h-[320px] rounded-2xl mb-8" />

      {/* Title */}
      <Skeleton className="h-10 w-3/4 mb-3" />
      <Skeleton className="h-10 w-1/2 mb-6" />

      {/* Meta row */}
      <div className="flex items-center gap-3 mb-10">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Section heading */}
        <Skeleton className="h-7 w-2/3" />

        {/* Paragraph */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        {/* Paragraph */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />

        {/* Section heading */}
        <Skeleton className="h-7 w-1/2 mt-8" />

        {/* Bullet-like lines */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-9/12" />
      </div>
    </main>
  );
}


export default function BlogViewPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogDoc | null>(null);

  useEffect(() => {
    if (!slug) return;
    getBlog(slug).then(setBlog);
  }, [slug]);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <BlogDetailSkeleton />
      </div>
    );
  }

  const createdAt =
    typeof blog.createdAt === "object"
      ? blog.createdAt.$date
      : blog.createdAt;

  const dateStr = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : "";

  return (
    <main className="max-w-3xl mx-auto p-6">
      {blog.featuredImage && (
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-4xl font-extrabold leading-tight">
        {blog.title}
      </h1>

      <div className="mt-3 text-sm text-muted-foreground flex items-center gap-3">
        <span>{blog.author ?? "Unknown"}</span>
        <span>•</span>
        <time>{dateStr}</time>
        <span>•</span>
        <span>{readingTimeFromJSON(blog.content)}</span>
      </div>


      <div className="mt-3">
        <ReadOnlyTipTap content={blog.content} />
      </div>

      <footer className="mt-12">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </footer>
    </main>
  );
}
