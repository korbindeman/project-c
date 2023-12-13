"use client";

import { useToast } from "@/components/ui/use-toast";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function CopyUrl({ children }: Props) {
  const { toast } = useToast();

  const copyUrl = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    toast({
      description: "Link copied",
    });
  };

  return (
    <span onClick={copyUrl} className="cursor-pointer">
      {children}
    </span>
  );
}
