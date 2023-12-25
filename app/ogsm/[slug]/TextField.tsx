import RichTextField from "@/components/RichTextField";
import { useDebouncedCallback } from "use-debounce";

// using RichTextField, with additional styling (e.a. bg change on hover), sending the value back to the TextFieldGroup on update
type Props = {
  content: string;
  id: number;
  updateField: (id: number, newContent: string) => any;
};
const TextField = ({ content, updateField, id }: Props) => {
  const debounced = useDebouncedCallback(
    (newContent) => updateField(id, newContent),
    50,
  );

  return (
    <div className="rounded-md transition hover:bg-gray-100 group-hover:bg-gray-100">
      <RichTextField
        content={content}
        className="max-w-full p-1"
        updateContent={debounced}
      />
    </div>
  );
};
export default TextField;
