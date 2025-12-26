import type { JSONContent } from "@tiptap/react";

/** Extract plain text from TipTap JSON */
export function extractTextFromJSON(content?: JSONContent): string {
  if (!content) return "";

  let text = "";

  const walk = (node: JSONContent) => {
    if (node.type === "text" && typeof node.text === "string") {
      text += node.text + " ";
    }

    if (Array.isArray(node.content)) {
      node.content.forEach(walk);
    }
  };

  walk(content);
  return text.replace(/\s+/g, " ").trim();
}

export function wordCountFromJSON(content?: JSONContent): number {
  const text = extractTextFromJSON(content);
  return text ? text.split(" ").length : 0;
}

export function readingTimeFromJSON(
  content?: JSONContent,
  wpm = 200
): string {
  const words = wordCountFromJSON(content);
  return words ? `${Math.max(1, Math.ceil(words / wpm))} min read` : "—";
}

export function excerptFromJSON(
  content?: JSONContent,
  maxChars = 160
): string {
  const text = extractTextFromJSON(content);
  if (!text) return "";

  if (text.length <= maxChars) return text;

  const truncated = text.slice(0, maxChars);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "...";
}
