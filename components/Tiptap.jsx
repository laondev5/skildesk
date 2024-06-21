"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({ des, onChange, description }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    // content: description,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-r border-l border-b border-gray-400 text-gray-700 item-start w-full h-[15rem] gap-3 font-medium text-[16px] pt-4 rounded-b-md outline-none overflow-y-scroll",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
      //console.log(editor.getHTML());
    },
  });

  return (
    <div>
      <Toolbar editor={editor} des={des} />
      <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
    </div>
  );
};

export default Tiptap;
