"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import TextField from "./TextField";

const getRandomId = () => Math.random().toString(36);

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
      for (let i = 0; i < contentList.length; i++) { //if any field is empty, disallow new field creation
        if (contentList[i][0] == "") return;
      }
    } catch (error) {
      console.log("Error while trying to loop trough contentlist");
      console.log(error);
      return;
    }

    let newFieldId = getRandomId();
    setContentList([...contentList, ["", newFieldId]]);
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
        className="flex h-12 flex-grow cursor-text flex-col justify-end"
        onClick={createNewField}
      >
        {/* <div className="cursor-pointer text-muted-foreground">
          <PlusCircleIcon className="m-1 h-6 w-6" />
        </div> */}
      </div>
    </div>
  );
};
