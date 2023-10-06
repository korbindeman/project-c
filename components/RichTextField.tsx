"use client";

import { EditorProvider, BubbleMenu, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler, ReactNode } from "react";
import Card from "./Card";

// TODO: add collaborative editing

const extensions = [StarterKit, Underline];

interface ButtonProps {
  name: string;
  content: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}
function Button({ name, content, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded p-1 transition hover:bg-gray-100"
    >
      <abbr title={name} className="no-underline">
        {content}
      </abbr>
    </div>
  );
}

function Menu() {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }

  const buttons: ButtonProps[][] = [
    [
      {
        name: "Bold",
        content: <div className="w-4 text-center font-bold">B</div>,
        onClick: () => editor.chain().focus().toggleBold().run(),
      },
      {
        name: "Italic",
        content: <div className="w-4 text-center font-mono italic">I</div>,
        onClick: () => editor.chain().focus().toggleItalic().run(),
      },
      {
        name: "Underline",
        content: <div className="w-4 text-center underline">U</div>,
        onClick: () => editor.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        name: "Bulleted List",
        content: <ListBulletIcon className="h-4 w-4" />,
        onClick: () => editor.chain().focus().toggleBulletList().run(),
      },
    ],
  ];

  return (
    <BubbleMenu>
      <Card noPadding={true}>
        <div className="p-1">
          <div className="flex items-center gap-1">
            {buttons.map((buttonGroup) => (
              <>
                {buttonGroup.map((button) => (
                  <Button
                    name={button.name}
                    content={button.content}
                    onClick={button.onClick}
                    key={button.name}
                  ></Button>
                ))}
                <div className="w-px self-stretch bg-gray-200 last:hidden"></div>
              </>
            ))}
          </div>
        </div>
      </Card>
    </BubbleMenu>
  );
}

interface RichTextFieldProps {
  content?: string;
}
export default function RichTextField({ content }: RichTextFieldProps) {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      editorProps={{
        attributes: {
          class:
            "p-2 prose text-sm outline-none hover:bg-gray-50 transition rounded-lg",
        },
      }}
    >
      <Menu />
    </EditorProvider>
  );
}