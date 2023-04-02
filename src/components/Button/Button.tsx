import clsx from "clsx";
import React from "react";

interface ButtonProps {
  theme?: "primary" | "secondary";
  fluid?: boolean;
}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, theme = "primary", fluid, ...rest }: Props) {
  return (
    <button
      className={clsx("rounded px-4 py-1 font-semibold transition-colors", {
        "bg-cyan-600 text-white hover:bg-cyan-500": theme === "primary",
        "bg-indigo-50  text-cyan-600 hover:bg-indigo-100 hover:text-cyan-700":
          theme === "secondary",

        "w-full": fluid,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
