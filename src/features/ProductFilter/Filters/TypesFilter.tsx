import Button from "@/components/Button/Button";
import { ItemType } from "@/types/product";
import { useAtom } from "jotai";
import React from "react";
import { itemTypeAtom } from "../filterAtom";

function TypesFilter() {
  const [selected, setSelected] = useAtom(itemTypeAtom);
  const options: ItemType[] = ["mug", "shirt"];

  function handleSelect(value: ItemType) {
    if (selected === value) {
      setSelected(undefined);
      return;
    }
    setSelected(value);
  }

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <Button
          key={option}
          theme={selected === option ? "primary" : "secondary"}
          onClick={() => handleSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default TypesFilter;
