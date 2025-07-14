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
        `py-4 px-4 max-w-screen-xl mx-auto bg-white dark:bg-avocado-green my-5 rounded-2xl shadow-lg shadow-red-950` +
        className
      }
    >
      {children}
    </section>
  );
}
