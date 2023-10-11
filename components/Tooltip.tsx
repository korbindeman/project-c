"use client";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import { ReactNode, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  content: string;
};

export default function Tooltip({ children, content }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
}
