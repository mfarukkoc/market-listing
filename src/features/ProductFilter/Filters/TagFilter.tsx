import React, { ReactNode, useState } from "react";
import FilterCard from "../FilterCard/FilterCard";
import { useQuery } from "react-query";
import { getTags } from "@/services";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/Input";
import { useAtom } from "jotai";
import { tagsAtom } from "../filterAtom";

function TagsFilter() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useAtom(tagsAtom);
  const { data: tags } = useQuery("tags", getTags);
  return (
    <FilterCard title="Tags">
      <Input
        placeholder={"Search tag"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-4 flex max-h-48 flex-col gap-4 overflow-y-auto">
        {tags?.reduce((prev, tag) => {
          if (tag.toLowerCase().includes(search.toLowerCase()))
            prev.push(
              <Checkbox
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={(value) => {
                  if (value) {
                    setSelectedTags([...selectedTags, tag]);
                  } else {
                    const temp = [...selectedTags];
                    const index = temp.findIndex(
                      (selectedBrand) => selectedBrand === tag
                    );
                    if (index !== -1) {
                      temp.splice(index, 1);
                      setSelectedTags(temp);
                    }
                  }
                }}
              >
                {tag}
              </Checkbox>
            );
          return prev;
        }, [] as ReactNode[])}
      </div>
    </FilterCard>
  );
}

export default TagsFilter;
