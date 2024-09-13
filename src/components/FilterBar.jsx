import React from "react";
import { Search } from "lucide-react";

const FilterBar = ({ searchTerm, onSearchChange, onTopicChange }) => {
  return (
    <div className="py-2 w-full flex items-center sm:flex-row flex-col gap-4 sm:gap-0 justify-between">
      <div className="relative w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for webinar"
          className="outline-none px-2 pl-8 py-1.5 border rounded-md sm:w-[380px] w-full border-[#E3E7EC] dark:bg-[#151617] dark:border-zinc-700 dark:text-white"
        />
        <Search className="absolute top-2 left-2" color="#636973" size={20} />
      </div>
      <div className="w-full flex items-center justify-end">
        <select
          onChange={(e) => {
            onTopicChange(e.target.value);
          }}
          className="outline-none sm:w-fit w-full px-2 py-1.5 border rounded-md border-[#E3E7EC] dark:bg-[#151617] dark:border-zinc-700 dark:text-white"
        >
          <option value="">Select Topic</option>
          <option value="careers">Careers</option>
          <option value="front end engineering">Front End Engineering</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
