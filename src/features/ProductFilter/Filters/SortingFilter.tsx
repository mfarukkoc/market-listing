import React from "react";
import FilterCard from "../FilterCard/FilterCard";
import Radio from "@/components/Radio/Radio";
import { sortOptions } from "@/pages/api/products";
import { useAtom } from "jotai";
import { sortAtom } from "../filterAtom";

function SortingFilter() {
  const [selected, setSelected] = useAtom(sortAtom);

  const options = [
    {
      value: sortOptions[0],
      label: "Price low to high",
    },
    {
      value: sortOptions[1],
      label: "Price high to low",
    },
    {
      value: sortOptions[2],
      label: "New to old",
    },
    {
      value: sortOptions[3],
      label: "Old to new",
    },
  ];

  return (
    <FilterCard title="Sorting">
      <fieldset name="sort" className="flex flex-col gap-4">
        {options.map((option) => (
          <Radio
            key={option.value}
            checked={option.value === selected}
            onChange={() => setSelected(option.value)}
          >
            {option.label}
          </Radio>
        ))}
      </fieldset>
    </FilterCard>
  );
}

export default SortingFilter;
