"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import TextField from "./TextField";

interface TextFieldGroupProps {
  contentList: { id: number; content: string; [key: string]: any }[];
  createFieldCallback: () => Promise<void>;
  updateFieldCallback: (id: number, content: string) => Promise<void>;
  deleteFieldCallback: (idToDelete: number) => Promise<void>;
  propertyToMatch?: string;
  matchAgainstValue?: any;
}

const TextFieldGroup = ({
  contentList,
  createFieldCallback,
  updateFieldCallback,
  deleteFieldCallback,
  propertyToMatch,
  matchAgainstValue,
}: TextFieldGroupProps) => {
  return (
    <div className="flex h-full flex-col space-y-1 p-1">
      {contentList.map((item) => {
        if (propertyToMatch && item[propertyToMatch] !== matchAgainstValue)
          return "";
        return (
          <div className="group relative" key={item.id}>
            <span
              onClick={() => deleteFieldCallback(item.id)}
              className="absolute right-0 top-0 z-10 hidden -translate-y-1/3 translate-x-1/3 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-0.5 opacity-80 transition hover:opacity-100 group-hover:block"
            >
              <XMarkIcon className="h-4 w-4 text-gray-500" />
            </span>
            <TextField
              content={item.content}
              updateField={updateFieldCallback}
              id={item.id}
            />
          </div>
        );
      })}
      <div
        className="flex h-12 flex-grow cursor-text flex-col justify-end"
        onClick={createFieldCallback}
      ></div>
    </div>
  );
};

export { TextFieldGroup };
