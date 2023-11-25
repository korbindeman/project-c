import RichTextField from "@/components/RichTextField";

// using RichTextField, with additional styling (e.a. bg change on hover), sending the value back to the TextFieldGroup on update
type Props = {
  content: string;
};
const TextField = ({ content }: Props) => {
  return (
    <div className="rounded-md transition hover:bg-gray-100 group-hover:bg-gray-100">
      <RichTextField content={content} className="max-w-full p-1" />
    </div>
  );
};
export default TextField;
