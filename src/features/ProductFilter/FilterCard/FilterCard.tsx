import React from "react";

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

function FilterCard({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold text-gray-500">{title}</span>
      <div className="rounded-sm bg-white p-6 drop-shadow-sm">{children}</div>
    </div>
  );
}

export default FilterCard;
