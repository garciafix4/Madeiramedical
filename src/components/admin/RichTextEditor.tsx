"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  Minus,
} from "lucide-react";

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: placeholder ?? "Escribe el contenido aquí..." }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[400px] px-4 py-3 focus:outline-none",
      },
    },
  });

  // Sync value from outside (e.g. when form resets)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  function setLink() {
    const url = window.prompt("URL del enlace:");
    if (!url) return;
    editor?.chain().focus().setLink({ href: url }).run();
  }

  const tools = [
    { icon: Bold, action: () => editor?.chain().focus().toggleBold().run(), title: "Negrita" },
    { icon: Italic, action: () => editor?.chain().focus().toggleItalic().run(), title: "Cursiva" },
    { icon: Heading2, action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(), title: "Título H2" },
    { icon: Heading3, action: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(), title: "Título H3" },
    { icon: List, action: () => editor?.chain().focus().toggleBulletList().run(), title: "Lista" },
    { icon: ListOrdered, action: () => editor?.chain().focus().toggleOrderedList().run(), title: "Lista numerada" },
    { icon: LinkIcon, action: setLink, title: "Enlace" },
    { icon: Minus, action: () => editor?.chain().focus().setHorizontalRule().run(), title: "Línea divisora" },
  ];

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-0.5 px-2 py-1.5 bg-gray-50 border-b border-gray-200">
        {tools.map(({ icon: Icon, action, title }) => (
          <button
            key={title}
            type="button"
            onClick={action}
            title={title}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon size={15} />
          </button>
        ))}
      </div>
      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
}
