"use client";

import { flip } from "@floating-ui/dom";
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
    middleware: [flip()],
  });

  const hover = useHover(context, {
    delay: {
      open: 350,
      close: 50,
    },
  });
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
          className="mt-0.5 cursor-default rounded bg-neutral-900 px-2 py-1 text-xs text-white"
        >
          {content}
        </div>
      )}
    </>
  );
}
