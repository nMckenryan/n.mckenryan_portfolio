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
      className={`bg-white dark:bg-gray-900 mx-5 my-5 rounded-2xl` + className}
    >
      {children}
    </section>
  );
}
