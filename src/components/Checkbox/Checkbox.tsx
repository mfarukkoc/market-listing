import React, { useState } from "react";
import CheckIcon from "@/assets/svg/Check.svg";
import clsx from "clsx";

interface CheckboxProps {
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

function Checkbox({
  children,
  checked: checkedFromProps,
  onChange: onChangeFromProps,
}: CheckboxProps) {
  const [checkedState, setChecked] = useState(false);
  const checked = checkedFromProps ?? checkedState;

  function onChange(value: boolean) {
    onChangeFromProps?.(value);
    setChecked(value);
  }

  return (
    <label className="flex cursor-pointer text-gray-500">
      <div
        className={clsx(
          "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm drop-shadow",
          checked ? "bg-cyan-600" : "bg-white"
        )}
      >
        {checked && (
          <CheckIcon width="12" height="100%" className="text-white" />
        )}
      </div>
      <input
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
