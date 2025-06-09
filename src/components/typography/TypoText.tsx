// /src/components/typograpgy/typotext.tsx

import React from "react";

type TypoTextVariant =
  | "default"
  | "muted"
  | "danger"
  | "success"
  | "caption"
  | "subtitle"
  | "highlight"
  | "secondary"
  | "small";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  variant?: TypoTextVariant;
};

const variantStyles: Record<TypoTextVariant, string> = {
  default: "text-base text-gray-700",
  muted: "text-sm text-gray-500",
  danger: "text-base text-red-600",
  success: "text-base text-green-600",
  caption: "text-xs text-gray-500",
  subtitle: "text-lg font-semibold text-gray-800",
  highlight: "text-base bg-yellow-100 px-1 rounded",
  secondary: "text-base text-gray-400",
  small: "text-sm text-gray-600",
};

export const TypoText: React.FC<TextProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const baseStyle = variantStyles[variant];
  return <p className={`${baseStyle} ${className}`}>{children}</p>;
};


export type { TypoTextVariant };