import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-medium transition-colors 
        bg-blue-600 text-white hover:bg-blue-700 focus:outline-none 
        focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 ${className}`}
    >
      {children}
    </button>
  );
}
