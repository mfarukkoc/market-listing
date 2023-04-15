import React from "react";

const Input = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={
        "w-full rounded-sm border-2 border-gray-200 px-4 py-3 text-gray-400 outline-none focus:border-gray-400"
      }
      {...rest}
    />
  );
};

export default Input;
