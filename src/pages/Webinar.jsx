import React, { useState } from "react";
import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import WebinarCard from "../components/WebinarCard";
import { useSelector } from "react-redux";
import { colors } from "../constants/data";

const Webinar = () => {
  const webinars = useSelector((store) => store.webinars.webinars);
  const [searchTerm, setSearchTerm] = useState("");
  const [topicFilter, setTopicFilter] = useState("");

  const filteredWebinars = webinars.filter((webinar) => {
    /**
     * Search in all fields avaliable
     * fields are -> topics, name, role, company, title, date, time
     */
    const searchFields = [
      webinar.topics,
      webinar.webinarTitle,
      webinar.instructorName,
      webinar.instructorCompany,
      webinar.instructorRole,
      webinar.webinarStartDate,
      webinar.startTime,
      webinar.endTime,
    ];

    const matchesSearchTerm = searchFields.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesTopic = topicFilter
      ? webinar.topics.toLowerCase().includes(topicFilter.toLowerCase())
      : true;

    return matchesSearchTerm && matchesTopic;
  });

  return (
    <div className="px-2 sm:px-8">
      <NavBar />
      <FilterBar
        searchTerm={searchTerm}
        topicFilter={topicFilter}
        onSearchChange={setSearchTerm}
        onTopicChange={setTopicFilter}
      />
      {filteredWebinars.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 mt-4 pb-10 sm:grid-cols-3 min-h-screen">
          {filteredWebinars.map((data, i) => (
            <WebinarCard
              key={i}
              color={colors[i % colors.length]}
              data={data}
            />
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center dark:text-white">
          <h1 className="text-red-500 sm:text-9xl text-7xl">404</h1>
          <span className="text-xl">No webinar Found</span>
        </div>
      )}
    </div>
  );
};

export default Webinar;
