import React from "react";

type SectionHeaderProps = {
  headerSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};


export default function SectionHeader({ headerSize = "h2", children, className = "" }: SectionHeaderProps) {
  if (!className) {
    className = "flex justify-center items-center text-balance text-xl md:text-3xl lg:text-4xl text-accent text-center font-header bg-background mb-2 mt-2 w-2/3 py-2 font-bold rounded-tl-full rounded-tr-full"

  }
  return React.createElement(headerSize, { className }, children);

}
