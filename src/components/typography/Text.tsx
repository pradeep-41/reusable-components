// /src/components/typography/Text.tsx
import React from "react";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "caption"
  | "label"
  | "overline"
  | "blockquote"
  | "muted"
  | "danger"
  | "success"
  | "highlight"
  | "secondary"
  | "small"
  | "subtitle";

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: React.ElementType;
};

const variantToTagMap: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p1: "p",
  p2: "p",
  p3: "p",
  p4: "p",
  caption: "span",
  label: "label",
  overline: "span",
  blockquote: "blockquote",
  muted: "p",
  danger: "p",
  success: "p",
  highlight: "p",
  secondary: "p",
  small: "p",
  subtitle: "p",
};

const variantStyles: Record<TextVariant, string> = {
  h1: "text-5xl font-bold text-gray-900",
  h2: "text-4xl font-semibold text-gray-900",
  h3: "text-3xl font-semibold text-gray-900",
  h4: "text-2xl font-medium text-gray-900",
  h5: "text-xl font-medium text-gray-900",
  h6: "text-lg font-medium text-gray-900",
  p1: "text-base text-gray-900",
  p2: "text-base text-gray-700",
  p3: "text-sm text-gray-700",
  p4: "text-sm text-gray-500",
  caption: "text-xs text-gray-500",
  label: "text-sm font-medium text-gray-700",
  overline: "uppercase tracking-widest text-xs text-gray-400",
  blockquote: "italic border-l-4 border-gray-300 pl-4 text-gray-600",
  muted: "text-sm text-gray-500",
  danger: "text-base text-red-600",
  success: "text-base text-green-600",
  highlight: "text-base bg-yellow-100 px-1 rounded",
  secondary: "text-base text-gray-400",
  small: "text-sm text-gray-600",
  subtitle: "text-lg font-semibold text-gray-800",
};

export const Text: React.FC<TextProps> = ({
  children = "Default Text",
  variant = "p1",
  className = "",
  as,
}) => {
  // 👇 Safely infer the tag as a React.ElementType
  const Tag: React.ElementType = as || variantToTagMap[variant];
  const style = variantStyles[variant];

  return <Tag className={`${style} ${className}`}>{children}</Tag>;
};

{
  /* // import React from "react";

// export type TextVariant =
//   | "h1"
//   | "h2"
//   | "h3"
//   | "h4"
//   | "h5"
//   | "h6"
//   | "p1"
//   | "p2"
//   | "p3"
//   | "p4"
//   | "caption"
//   | "label"
//   | "overline"
//   | "blockquote";

// type TextProps = {
//   children: React.ReactNode;
//   variant?: TextVariant;
//   className?: string;
//   as?: keyof JSX.IntrinsicElements;
// };

// const variantToTagMap: Record<TextVariant, keyof JSX.IntrinsicElements> = {
//   h1: "h1",
//   h2: "h2",
//   h3: "h3",
//   h4: "h4",
//   h5: "h5",
//   h6: "h6",
//   p1: "p",
//   p2: "p",
//   p3: "p",
//   p4: "p",
//   caption: "span",
//   label: "label",
//   overline: "span",
//   blockquote: "blockquote",
// };

// const variantStyles: Record<TextVariant, string> = {
//   h1: "text-5xl font-bold",
//   h2: "text-4xl font-semibold",
//   h3: "text-3xl font-semibold",
//   h4: "text-2xl font-medium",
//   h5: "text-xl font-medium",
//   h6: "text-lg font-medium",
//   p1: "text-base text-gray-900",
//   p2: "text-base text-gray-700",
//   p3: "text-sm text-gray-700",
//   p4: "text-sm text-gray-500",
//   caption: "text-xs text-gray-500",
//   label: "text-sm font-medium text-gray-700",
//   overline: "uppercase tracking-widest text-xs text-gray-400",
//   blockquote: "italic border-l-4 border-gray-300 pl-4 text-gray-600",
// };

// export const Text: React.FC<TextProps> = ({
//   children,
//   variant = "p1",
//   className = "",
//   as,
// }) => {
//   const Tag = as || variantToTagMap[variant];
//   const baseStyle = variantStyles[variant];

//   return <Tag className={`${baseStyle} ${className}`}> {children} </Tag>;
// };
 */
}
