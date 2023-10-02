import { ReactNode } from "react";

type Props = { children?: ReactNode };
export default function Card({ children }: Props) {
  return <div className="rounded-lg border bg-white p-8">{children}</div>;
}
