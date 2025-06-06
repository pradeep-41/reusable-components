import React from "react";
import clsx from "clsx";

type InputVariant =
  | "default"
  | "underline"
  | "outline"
  | "filled"
  | "rounded"
  | "ghost"
  | "flushed"
  | "disabled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};

export const Input: React.FC<InputProps> = ({
  variant = "default",
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "transition-all duration-200 ease-in-out w-full focus:outline-none";

  const variantStyles: Record<InputVariant, string> = {
    default:
      "border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500",
    underline:
      "border-0 border-b-2 border-gray-300 focus:border-blue-500 rounded-none px-2 py-1",
    outline:
      "border border-gray-400 px-3 py-2 rounded-md focus:ring focus:ring-blue-300",
    filled:
      "bg-gray-100 border border-gray-200 rounded px-3 py-2 focus:bg-white focus:border-blue-500",
    rounded:
      "border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500",
    ghost: "bg-transparent border-0 px-3 py-2 focus:ring-2 focus:ring-blue-400",
    flushed:
      "border-b border-gray-300 rounded-none px-0 py-1 focus:border-blue-500",
    disabled:
      "bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed px-3 py-2",
  };

  return (
    <input
      className={clsx(baseStyles, variantStyles[variant], className)}
      disabled={disabled || variant === "disabled"}
      {...props}
    />
  );
};



export type {InputVariant}