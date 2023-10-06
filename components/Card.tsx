import { ReactNode } from "react";

type Props = { children?: ReactNode; noPadding?: Boolean };
export default function Card({ children, noPadding }: Props) {
  return (
    <div
      className={`h-full rounded-lg border bg-white ${noPadding ? "" : "p-8"}`}
    >
      {children}
    </div>
  );
}
