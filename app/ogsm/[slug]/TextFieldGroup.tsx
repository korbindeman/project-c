"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import TextField from "./TextField";

const getRandomId = () => Math.random().toString(36);

// TODO: Focus field if new field is made
// TODO: fix content not being updated on change in TextFields

type Props = {
  initialContent: string[];
};
export const TextFieldGroup = ({
  initialContent: initialContentList,
}: Props) => {
  const [contentList, setContentList] = useState(
    initialContentList.map((content) => [content, getRandomId()]),
  );

  const createNewField = () => {
    try {
      if (contentList[contentList.length - 1][0] == "") return; // If last field is empty, disallow new field creation
    } catch (error) {}

    let newFieldId = getRandomId();
    setContentList([...contentList, ["", newFieldId]]);
    //.focus on newly created input field. Retreive field trough newFieldId?
  };

  const deleteField = (fieldId: string) => {
    setContentList(contentList.filter(([_, id]) => fieldId != id));
  };

  const updateField = (newContent: string, fieldId: string) => {
    setContentList(
      contentList.map(([content, id]) => {
        if (fieldId === id) return [newContent, id];
        return [content, id];
      }),
    );
  };

  return (
    <div className="flex h-full flex-col space-y-1 p-1">
      {contentList.map(([content, id]) => (
        <div className="group relative" key={id}>
          <span
            onClick={() => deleteField(id)}
            className="absolute right-0 top-0 z-10 hidden -translate-y-1/3 translate-x-1/3 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-0.5 opacity-80 transition hover:opacity-100 group-hover:block"
          >
            <XMarkIcon className="h-4 w-4 text-gray-500" />
          </span>
          <TextField content={content} updateField={updateField} id={id} />
        </div>
      ))}
      <div
        className="h-12 flex-grow cursor-text"
        onClick={createNewField}
      ></div>
    </div>
  );
};
