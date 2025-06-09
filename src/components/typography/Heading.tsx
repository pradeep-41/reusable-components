// /src/components/typograpgy/heading.tsx

import React from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const headingStyles = {
  1: "text-4xl font-bold",
  2: "text-3xl font-semibold",
  3: "text-2xl font-semibold",
  4: "text-xl font-medium",
  5: "text-lg font-medium",
  6: "text-base font-medium",
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyle = headingStyles[level];

  return (
    <Tag className={`${baseStyle} text-gray-900 ${className}`}>{children}</Tag>
  );
};
