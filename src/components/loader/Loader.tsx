import React from "react";
import "./Loader.css"; // All styles live here


type LoaderVariant =
  | "spinner"
  | "ellipsis"
  | "pulse"
  | "bar"
  | "wave"
  | "dot-ring"
  | "text"
  | "cube"
  | "dual-ring"
  | "skeleton";

type LoaderProps = {
  variant?: LoaderVariant;
  color?: string;
  size?: number;
  fullscreen?: boolean;
  centered?: boolean;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  variant = "spinner",
  color = "#333",
  size = 40,
  fullscreen = false,
  centered = false,
  className = "",
}) => {
  const baseClass = `loader-${variant}`;
  const wrapperClass = [
    "loader-wrapper",
    fullscreen ? "fullscreen" : "",
    centered ? "centered" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: React.CSSProperties = {
    width: size,
    height: size,
    color,
  };

  // Some variants like ellipsis or wave might use inner elements
  const getInnerMarkup = () => {
    switch (variant) {
      case "ellipsis":
        return (
          <>
            <div></div>
            <div></div>
            <div></div>
          </>
        );
      case "wave":
        return (
          <>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </>
        );
      case "dot-ring":
      case "dual-ring":
      case "cube":
      case "pulse":
      case "skeleton":
        return null;
      case "text":
        return <span>Loading...</span>;
      default:
        return null;
    }
  };

  return (
    <div className={wrapperClass}>
      <div className={baseClass} style={style}>
        {getInnerMarkup()}
      </div>
    </div>
  );
};

export type {LoaderVariant};