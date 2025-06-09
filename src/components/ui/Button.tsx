


// /src/components/ui/Button.tsx

import React from "react";
import clsx from "clsx";

// === Variants ===
export type ButtonVariant =
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

export type ButtonSize = "sm" | "md" | "lg";

// === Shared style maps ===
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

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

// === Polymorphic prop types ===
type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
};

// === Final component type ===
export type ButtonProps<T extends React.ElementType = "button"> =
  PolymorphicComponentProps<T, ButtonBaseProps>;

// === Component ===
export const Button = React.forwardRef(
  <T extends React.ElementType = "button">(
    {
      as,
      variant = "primary",
      size = "md",
      isLoading = false,
      className = "",
      disabled,
      children,
      ...rest
    }: ButtonProps<T>,
    ref: React.Ref<Element>
  ) => {
    const Component = as || "button";
    const isDisabled = disabled || isLoading;

    const base =
      "inline-flex items-center justify-center rounded font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

    const classes = clsx(base, variantStyles[variant], sizeStyles[size], className);

    return (
      <Component
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...rest}
      >
        {isLoading && (
          <span className="animate-spin w-4 h-4 border-2 border-t-transparent border-white rounded-full mr-2" />
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";



//this is a older variant button
  {/* import React from "react";
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


export type { ButtonVariant }; */}