"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import TextField from "./TextField";

const getRandomId = () => Math.random().toString(36);

// TODO: Focus field if new field is made
// TODO: If last field is empty, disallow new field creation
type Props = {
  initialContent: string[];
};
export const TextFieldGroup = ({
  initialContent: initialContentList,
}: Props) => {
  const [contentList, setContentList] = useState(
    initialContentList.map((content) => [content, getRandomId()]),
  );
  const handleFieldClick = () => {
    setContentList([...contentList, ["", getRandomId()]]);
  };
  const deleteField = (deleteId: string) => {
    setContentList(contentList.filter(([_, id]) => deleteId != id));
  };
  return (
    <div className="flex h-full flex-col space-y-1 px-2 py-1">
      {contentList.map(([content, id]) => (
        <div className="group relative" key={id}>
          <span
            onClick={() => deleteField(id)}
            className="absolute right-0 top-0 z-10 hidden -translate-y-1/4 translate-x-1/4 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-0.5 group-hover:block"
          >
            <XMarkIcon className="h-4 w-4 text-gray-500" />
          </span>
          <TextField content={content} />
        </div>
      ))}
      <div
        className="h-12 flex-grow cursor-text"
        onClick={handleFieldClick}
      ></div>
    </div>
  );
};
