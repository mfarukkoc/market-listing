import React from "react";
import Minus from "@/assets/svg/Minus.svg";
import Plus from "@/assets/svg/Plus.svg";
import Trash from "@/assets/svg/Trash.svg";

interface CounterProps {
  count: number;
  onChange: (count: number) => void;
}

function Counter({ count, onChange }: CounterProps) {
  return (
    <div className="flex text-cyan-600">
      <button className="px-3" onClick={() => onChange(count - 1)}>
        {count === 1 ? (
          <Trash className="h-4 w-4" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </button>
      <div className="flex h-8 w-8 items-center justify-center bg-cyan-600 font-bold text-white">
        {count}
      </div>
      <button className="px-3" onClick={() => onChange(count + 1)}>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Counter;
