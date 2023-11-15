"use client";
import RichTextField from "@/components/RichTextField";
import { useState } from "react";
interface TextWrapperProps {
  initialContent: string[];
}
/* TextWrapper component gets string[], adds new empty string so you get a new RichTextField to edit*/
export default function TextWrapper({ initialContent }: TextWrapperProps) {
  const [textList, setTextList] = useState(initialContent);
  const handleFieldClick = () => {
    setTextList([...textList, ""]);
  };
  return (
    <div className="px-2 py-1">
      {textList.map((text: string) => (
        <RichTextField content={text} key={text} />
      ))}
      <div className="h-12" onClick={handleFieldClick}></div>
    </div>
  );
}
