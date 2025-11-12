import { Link } from "react-router-dom";
// import { excerptFromHtml, readingTimeFromHtml } from "@/utils/readingTime";
import { Button } from "@/components/ui/button";
import type { BlogDoc } from "./BlogList";


// simple helpers: strip HTML, compute words, reading time, excerpt
export function stripHtml(html?: string) {
  if (!html) return "";
  // quick DOM-less strip
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function wordCountFromHtml(html?: string) {
  const txt = stripHtml(html);
  if (!txt) return 0;
  return txt.split(" ").filter(Boolean).length;
}

export function readingTimeFromHtml(html?: string, wpm = 60) {
  const words = wordCountFromHtml(html);
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min read`;
}

export function excerptFromHtml(html?: string, maxChars = 160) {
  const txt = stripHtml(html);
  if (txt.length <= maxChars) return txt;
  const truncated = txt.slice(0, maxChars);
  // cut to last space
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "...";
}


export default function BlogCard({ blog }: { blog: BlogDoc }) {
  const createdAt = blog.createdAt;
  const date = createdAt ? new Date(createdAt).toLocaleDateString() : "";

  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      {blog.featuredImage && (
        <Link to={`/blogs/${blog.slug}`}>
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-44 object-cover"
          />
        </Link>
      )}

      <div className="p-4">
        <Link to={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 hover:underline">{blog.title}</h3>
        </Link>

        <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
          <span>{blog.author ?? "Unknown"}</span>
          <span>•</span>
          <time>{date}</time>
          <span>•</span>
          <span>{readingTimeFromHtml(blog.content)}</span>
        </div>

        <p className="mt-3 text-slate-700 text-sm">{excerptFromHtml(blog.summary ?? blog.content, 140)}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            
          </div>

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
