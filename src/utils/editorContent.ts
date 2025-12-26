import type { JSONContent } from "@tiptap/react";

/** Extract plain text from Tiptap JSON */
export function extractTextFromJSON(content?: JSONContent): string {
  if (!content) return "";

  let text = "";

  const walk = (node: any) => {
    if (node.type === "text" && typeof node.text === "string") {
      text += node.text + " ";
    }
    if (Array.isArray(node.content)) {
      node.content.forEach(walk);
    }
  };

  walk(content);
  return text.trim();
}

export function wordCountFromJSON(content?: JSONContent): number {
  const text = extractTextFromJSON(content);
  return text ? text.split(/\s+/).length : 0;
}

export function readingTimeFromJSON(
  content?: JSONContent,
  wpm = 200
): string {
  const words = wordCountFromJSON(content);
  const minutes = Math.max(1, Math.ceil(words / wpm));
  return `${minutes} min read`;
}

export function excerptFromJSON(
  content?: JSONContent,
  maxChars = 160
): string {
  const text = extractTextFromJSON(content);
  if (text.length <= maxChars) return text;

  const truncated = text.slice(0, maxChars);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "...";
}
