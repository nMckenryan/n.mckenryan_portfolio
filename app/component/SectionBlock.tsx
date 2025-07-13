import React from "react";
import type { ReactNode } from "react";

export default function SectionBlock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={
        `py-4 px-4 max-w-4/5 bg-white dark:bg-avocado-green mx-5 my-5 rounded-2xl ` +
        className
      }
    >
      {children}
    </section>
  );
}
