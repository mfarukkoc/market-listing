import React from "react";
import BrandsFilter from "./Filters/BrandsFilter";
import SortingFilter from "./Filters/SortingFilter";
import TagsFilter from "./Filters/TagFilter";

function FilterContainer() {
  return (
    <div
      className="hidden w-72 flex-shrink-0 flex-col 
    gap-6
    lg:flex"
    >
      <SortingFilter />
      <BrandsFilter />
      <TagsFilter />
    </div>
  );
}

export default FilterContainer;
