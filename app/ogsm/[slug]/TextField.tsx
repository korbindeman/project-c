import RichTextField from "@/components/RichTextField";
import { useCurrentEditor } from "@tiptap/react";

// using RichTextField, with additional styling (e.a. bg change on hover), sending the value back to the TextFieldGroup on update
type Props = {
  content: string;
  id: string;
  updateField: (newContent: string, fieldId: string) => void;
};
const TextField = ({ content, updateField, id }: Props) => {
  const { editor } = useCurrentEditor();

  return (
    <div className="rounded-md transition hover:bg-gray-100 group-hover:bg-gray-100">
      <RichTextField
        content={content}
        className="max-w-full p-1"
        updateContent={(content) => updateField(content, id)}
      />
    </div>
  );
};
export default TextField;
