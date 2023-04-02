import React from "react";
import CheckIcon from "@/assets/svg/Check.svg";
import clsx from "clsx";

interface RadioProps {
  children?: React.ReactNode;
  checked: boolean;
  onChange: (value: boolean) => void;
  name?: string;
}

function Radio({ children, checked, onChange }: RadioProps) {
  return (
    <label className="flex cursor-pointer text-gray-500">
      <div
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded-full border-2 ",
          checked ? "border-cyan-600" : "border-gray-300 bg-white"
        )}
      >
        {checked && (
          <CheckIcon width="12" height="100%" className="text-cyan-600" />
        )}
      </div>
      <input
        className="hidden"
        type="radio"
        checked={checked}
        onChange={() => {
          onChange(!checked);
        }}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Radio;
