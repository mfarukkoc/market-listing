import React, { ReactNode, useState } from "react";
import FilterCard from "../FilterCard/FilterCard";
import { useQuery } from "react-query";
import { getBrands } from "@/services";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/Input";
import { useAtom } from "jotai";
import { brandsAtom } from "../filterAtom";

function BrandsFilter() {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useAtom(brandsAtom);

  const { data: brands } = useQuery("brands", getBrands);
  return (
    <FilterCard title="Brands">
      <Input
        placeholder={"Search brand"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-4 flex max-h-48 flex-col gap-4 overflow-y-auto">
        {brands?.reduce((prev, brand) => {
          if (brand.name.toLowerCase().includes(search.toLowerCase()))
            prev.push(
              <Checkbox
                key={brand.slug}
                checked={selectedBrands.includes(brand.slug)}
                onChange={(value) => {
                  let temp = [...selectedBrands];
                  if (value) {
                    temp = [...temp, brand.slug];
                  } else {
                    const index = temp.findIndex(
                      (selectedBrand) => selectedBrand === brand.slug
                    );
                    if (index !== -1) {
                      temp.splice(index, 1);
                    }
                  }

                  setSelectedBrands(temp.length > 0 ? temp : undefined);
                }}
              >
                {brand.name}
              </Checkbox>
            );
          return prev;
        }, [] as ReactNode[])}
      </div>
    </FilterCard>
  );
}

export default BrandsFilter;
