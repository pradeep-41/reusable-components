import React from "react";
 type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "link"
  | "success"
  | "warning"
  | "info"
  | "light"
  | "dark";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
  link: "text-blue-600 underline hover:text-blue-800",
  success: "bg-green-600 text-white hover:bg-green-700",
  warning: "bg-yellow-500 text-black hover:bg-yellow-600",
  info: "bg-cyan-600 text-white hover:bg-cyan-700",
  light: "bg-gray-100 text-black hover:bg-gray-200",
  dark: "bg-black text-white hover:bg-gray-900",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition-colors";
  const variantClass = variantStyles[variant];

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};


export type { ButtonVariant };