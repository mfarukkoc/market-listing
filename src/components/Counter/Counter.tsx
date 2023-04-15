import React, { useEffect, useRef } from "react";
import Minus from "@/assets/svg/Minus.svg";
import Plus from "@/assets/svg/Plus.svg";
import Trash from "@/assets/svg/Trash.svg";
import { motion, AnimatePresence } from "framer-motion";

interface CounterProps {
  count: number;
  onChange: (count: number) => void;
}

function Counter({ count, onChange }: CounterProps) {
  const prevCountRef = useRef<number | undefined>();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const directionMultiplier =
    prevCountRef.current === undefined
      ? 0
      : prevCountRef.current > count
      ? -1
      : 1;

  return (
    <div className="flex w-full justify-center text-cyan-600">
      <button
        type="button"
        className="px-3"
        onClick={() => onChange(count - 1)}
      >
        {count === 1 ? (
          <Trash className="h-4 w-4" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </button>
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-cyan-600 font-bold text-white">
        <AnimatePresence custom={directionMultiplier}>
          <motion.span
            custom={directionMultiplier}
            variants={{
              enter: (directionMultiplier: number) => ({
                left:
                  directionMultiplier === 0
                    ? "auto"
                    : `${100 * directionMultiplier}%`,
              }),
              center: { left: "auto" },
              exit: (directionMultiplier: number) => ({
                left: `${-100 * directionMultiplier}%`,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute"
            key={count}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>
      <button
        type="button"
        className="px-3"
        onClick={() => onChange(count + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Counter;
