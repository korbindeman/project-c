import { ReactNode } from "react";

type Props = { children?: ReactNode };
export default function Card({ children }: Props) {
  return (
    <div className="h-full rounded-lg border bg-white p-8">{children}</div>
  );
}
