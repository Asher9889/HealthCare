import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { BlogDoc } from "./BlogList";
import {
  readingTimeFromJSON,
  excerptFromJSON,
} from "@/utils/editorContent";
import { blogPlaceholder } from "@/assets";

export default function BlogCard({ blog }: { blog: BlogDoc }) {
  const createdAt = blog.createdAt;
  const date = createdAt ? new Date(createdAt).toLocaleDateString() : "";


  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden my-12">
     
        <Link to={`/blogs/${blog.slug}`}>
          <img
            src={blog.featuredImage?.trim() ||  blogPlaceholder}
            alt={blog.title}
            className="w-full h-44 object-cover"
          />
        </Link>
      

      <div className="p-4">
        <Link to={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 hover:underline">
            {blog.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground text-nowrap">
          <span>{blog.author ?? "Unknown"}</span>
          <span>•</span>
          <time>{date}</time>
          <span>•</span>
          <span>{readingTimeFromJSON(blog.content)}</span>
        </div>

        <p className="mt-3 text-slate-700 text-sm">
          {excerptFromJSON(blog.content, 140)}
        </p>

        <div className="mt-4 flex justify-end">
          <Button asChild>
            <Link to={`/blogs/${blog.slug}`} className="text-sm">
              Read article →
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
