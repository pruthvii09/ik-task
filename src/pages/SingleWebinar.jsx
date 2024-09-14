import React from "react";
import { Navigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Image from "../asstes/image.png";
import { useSelector } from "react-redux";
const SingleWebinar = () => {
  const { id } = useParams();
  const webinars = useSelector((store) => store.webinars.webinars);
  const webinar = webinars.find((webinar) => webinar.id === parseInt(id));
  if (!webinar) {
    return <Navigate to={"/not-found"} />;
  }
  console.log(webinar);
  return (
    <div className="px-8 pb-10 dark:text-white">
      <div>
        <NavBar />
      </div>
      <div className="mt-8 w-full border border-gray-300 dark:border-zinc-700 rounded-lg px-4 py-5">
        <div>
          <div className="bg-gradient-to-r from-[#5B86E5] to-[#36D1DC] p-6 text-white rounded-2xl">
            <h1 className="text-4xl font-medium">{webinar?.webinarTitle}</h1>
            <p className="text-xl font-normal mt-1">{webinar?.topics}</p>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div>
              <img src={Image} width={90} height={90} alt="" />
            </div>
            <div>
              <h2 className="text-2xl">{webinar?.instructorName}</h2>
              <p>
                {webinar?.instructorRole} at {webinar?.instructorRole}
              </p>
            </div>
          </div>
          <div className="mt-8 px-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">About the Webinar</h3>
              <p>
                Join us for an in-depth exploration of modern web application
                development. This webinar will cover the latest technologies,
                best practices, and techniques for building robust and scalable
                web applications.
              </p>
              <p>You'll learn about:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Modern JavaScript frameworks and libraries</li>
                <li>Responsive design principles</li>
                <li>Performance optimization techniques</li>
                <li>State management in complex applications</li>
                <li>Testing and debugging strategies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Who Should Attend</h3>
              <p>
                This webinar is perfect for front-end developers, web designers,
                and anyone interested in staying up-to-date with the latest web
                development trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWebinar;
