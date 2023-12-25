interface OgsmSectionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const OgsmSection = ({ title, children, className }: OgsmSectionProps) => {
  return (
    <div className={className + " flex h-full flex-col"}>
      <h2 className="ml-1 py-1 text-sm font-semibold tracking-tight text-neutral-500">
        {title}
      </h2>
      <div className="grow">{children}</div>
    </div>
  );
};

export { OgsmSection };
