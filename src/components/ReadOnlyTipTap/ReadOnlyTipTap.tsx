import { EditorContent, useEditor, type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss"
import "@/components/tiptap-node/code-block-node/code-block-node.scss"
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss"
import "@/components/tiptap-node/list-node/list-node.scss"
import "@/components/tiptap-node/image-node/image-node.scss"
import "@/components/tiptap-node/heading-node/heading-node.scss"
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss"
import "./simple-editor.scss"
import Link from "@tiptap/extension-link";
import {HorizontalRule} from "@tiptap/extension-horizontal-rule";
// import HorizontalRule from "../tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import { useEffect } from "react";


type Props = {
    content: JSONContent;
};

export default function ReadOnlyTipTap({ content }: Props) {
    const editor = useEditor({
        editable: false,
        content: content,
        extensions: [StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }), Link.configure({
            autolink: true,
            linkOnPaste: true,
            openOnClick: false,
            HTMLAttributes: {
                target: "_blank",
                rel: "noopener noreferrer nofollow",
            },
        }),
            HorizontalRule,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Typography,
            Superscript,
            Subscript,
        ],
    });

     // 🔑 THIS IS THE FIX
  useEffect(() => {
    if (!editor || !content) return;

    editor.commands.setContent(content);
  }, [editor, content]);

  if (!editor) return null;

    return <EditorContent editor={editor} />;
}





