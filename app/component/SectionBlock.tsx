import React from "react";
import type { ReactNode } from "react";

export default function SectionBlock({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`lg:w-[50vw] py-4 px-6 max-w-screen-xl mx-auto bg-gradient-to-bl from-avocado-green to-avocado-green-dark my-5 rounded-2xl shadow-md shadow-red-950 ${className}`}
    >
      {children}
    </section>
  );
}
