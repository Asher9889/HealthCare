import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { BlogDoc } from "./BlogList";
import {
  readingTimeFromJSON,
  excerptFromJSON,
} from "@/utils/editorContent";
import { blogPlaceholder } from "@/assets";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  blog: BlogDoc;
  variant?: "default" | "featured";
};

export default function BlogCard({
  blog,
  variant = "default",
}: BlogCardProps) {
  const isFeatured = variant === "featured";

  const date = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString()
    : "";

  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden h-full flex flex-col">
      {/* Image */}
      <Link to={`/blogs/${blog.slug}`} className="block">
        <img
          src={blog.featuredImage?.trim() || blogPlaceholder}
          alt={blog.title}
          className={cn(
            "w-full object-cover transition-transform duration-300 hover:scale-105",
            isFeatured ? "h-64" : "h-44"
          )}
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/blogs/${blog.slug}`}>
          <h3
            className={cn(
              "font-bold text-slate-900 leading-tight hover:underline",
              isFeatured ? "text-2xl" : "text-lg"
            )}
          >
            {blog.title}
          </h3>
        </Link>

        {/* Meta */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{blog.author ?? "Unknown"}</span>
          <span>•</span>
          <time>{date}</time>
          <span>•</span>
          <span>{readingTimeFromJSON(blog.content)}</span>
        </div>

        {/* Excerpt */}
        <p
          className={cn(
            "mt-3 text-slate-700 text-sm",
            isFeatured ? "line-clamp-4" : "line-clamp-3"
          )}
        >
          {excerptFromJSON(blog.content, isFeatured ? 220 : 140)}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-4 flex justify-end">
          <Button asChild variant={isFeatured ? "default" : "secondary"}>
            <Link to={`/blogs/${blog.slug}`} className="text-sm">
              Read article →
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
