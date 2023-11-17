// multiple TextFields and functionality to add and remove TextFields, send values back when updated
type Props = {
  initialContent: [string, number][];
};
const TextFieldGroup = ({ initialContent }: Props) => {
  return (
    <div className="">
      {initialContent.map((content, id) => (
        <div className="" key={id}>
          {content}
        </div>
      ))}
    </div>
  );
};
