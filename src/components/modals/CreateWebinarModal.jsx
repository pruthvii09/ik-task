import { Plus, Users, Video, X } from "lucide-react";
import React, { useState } from "react";
import { useModal } from "../../context/ModalContext";
import Input from "../ui/Input";
import { useDispatch } from "react-redux";
import { createWebinar } from "../../redux/webinarSlice";
import toast from "react-hot-toast";

const CreateWebinarModal = () => {
  const { hideModal } = useModal();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    instructorName: "",
    instructorRole: "",
    instructorImage: "",
    instructorCompany: "",
    topics: "",
    webinarTitle: "",
    webinarStartDate: "",
    startTime: "",
    endTime: "",
  });
  const [errors, setErrors] = useState({});

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({
          ...data,
          instructorImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(data).forEach((key) => {
      if (key !== "instructorImage" && !data[key]) {
        newErrors[key] = "This field is required";
      }
    });
    if (data.instructorName && data.instructorName.length < 2) {
      newErrors.instructorName = "Name must be at least 2 characters long";
    }
    if (data.webinarStartDate) {
      const date = new Date(data.webinarStartDate);
      if (isNaN(date.getTime())) {
        newErrors.webinarStartDate = "Invalid date format";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submissionData = {
        ...data,
        id: Math.floor(Math.random() * (10000 - 11 + 1)) + 11,
        instructorImage:
          data.instructorImage || "https://i.postimg.cc/Jh8vpP09/image.png",
      };
      dispatch(createWebinar(submissionData));
      hideModal();
      toast.success("Webinar created successfully!!");
      setData({
        instructorName: "",
        instructorRole: "",
        instructorImage: "",
        instructorCompany: "",
        topics: "",
        webinarTitle: "",
        webinarStartDate: "",
        startTime: "",
        endTime: "",
      });
    } else {
      console.log("Form has errors, please correct them");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-50 bg-white dark:bg-[#151A22]  sm:w-[70%] w-[90%] rounded-2xl shadow-lg">
        <div className="px-4 py-3 flex items-center justify-between border-b border-[#E3E7EC] dark:border-zinc-800">
          <h1 className="text-lg font-medium dark:text-white">
            Create Webinar
          </h1>
          <X
            onClick={() => hideModal()}
            size={18}
            className="dark:text-white"
          />
        </div>
        <div className="max-h-[70vh] overflow-y-auto ">
          {/* Instructor Detail */}
          <div className="mt-6 pb-4 px-4">
            <div className="flex gap-3 text-base  text-[#2E333B]">
              <div className="sm:block hidden">
                <Users
                  size={24}
                  className="text-[#444952] dark:text-zinc-200"
                />
              </div>
              <div className="w-full">
                <h5 className="font-semibold dark:text-zinc-200">
                  Instructor Details
                </h5>
                <div className="flex sm:flex-row flex-col-reverse gap-6 mt-4">
                  <div className="flex flex-col gap-4 justify-between flex-1">
                    <Input
                      error={errors.instructorName}
                      type="text"
                      value={data.instructorName}
                      onChange={(e) =>
                        setData({ ...data, instructorName: e.target.value })
                      }
                      label="Instructor Name"
                      placeholder="Type instructor name"
                      required={true}
                    />
                    <Input
                      error={errors.instructorRole}
                      value={data.instructorRole}
                      onChange={(e) =>
                        setData({ ...data, instructorRole: e.target.value })
                      }
                      type="text"
                      label="Instructor Role"
                      placeholder="Type instructor role"
                      required={true}
                    />
                  </div>
                  <div className="flex-1">
                    {/* Placeholder for the image */}
                    <p className="text-[#2E333B] dark:text-zinc-200 mb-1 font-semibold text-[14px]">
                      Instructor Image
                    </p>
                    {data.instructorImage ? (
                      <label
                        htmlFor="file_input"
                        className="flex w-[120px] h-[120px] bg-[#F2F4F8] rounded-md"
                      >
                        <img
                          src={data.instructorImage}
                          className="rounded-xl"
                          alt=""
                        />
                      </label>
                    ) : (
                      <label
                        htmlFor="file_input"
                        className="flex w-[120px] h-[120px] bg-[#F2F4F8] dark:border-zinc-700 dark:bg-[#151617] border-dashed border-2 items-center justify-center border-gray-300 rounded-md"
                      >
                        <Plus />
                      </label>
                    )}
                    <input
                      type="file"
                      id="file_input"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-6 mt-4">
                  <div className="flex-1">
                    <Input
                      error={errors.instructorCompany}
                      value={data.instructorCompany}
                      onChange={(e) =>
                        setData({ ...data, instructorCompany: e.target.value })
                      }
                      type="text"
                      label="Instructor Company"
                      placeholder="Type instructor Company"
                      required={true}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      error={errors.topics}
                      value={data.topics}
                      onChange={(e) =>
                        setData({ ...data, topics: e.target.value })
                      }
                      type="text"
                      label="Topics"
                      placeholder="Type the Topics"
                      required={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Webinar Details */}
          <div className="mt-4 pb-4 px-4">
            <div className="flex gap-3 text-base  text-[#2E333B]">
              <div className="sm:block hidden">
                <Video
                  size={24}
                  className="text-[#444952] dark:text-zinc-200"
                />
              </div>
              <div className="w-full">
                <h5 className="font-semibold dark:text-white">
                  Webinar Details
                </h5>
                <div className="flex mt-4">
                  <div className="flex-1">
                    <Input
                      error={errors.webinarTitle}
                      value={data.webinarTitle}
                      onChange={(e) =>
                        setData({ ...data, webinarTitle: e.target.value })
                      }
                      type="text"
                      label="Webinar Title"
                      placeholder="Type Webinar Title"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex gap-6 sm:flex-row flex-col mt-4">
                  <div>
                    <Input
                      error={errors.webinarStartDate}
                      value={data.webinarStartDate}
                      onChange={(e) =>
                        setData({ ...data, webinarStartDate: e.target.value })
                      }
                      type="date"
                      label="Start Date"
                      placeholder="Type Start Date"
                      required={true}
                    />
                  </div>
                  <div>
                    <Input
                      error={errors.startTime}
                      value={data.startTime}
                      onChange={(e) =>
                        setData({ ...data, startTime: e.target.value })
                      }
                      type="time"
                      label="Start Time"
                      placeholder="Type Start Time"
                      required={true}
                    />
                  </div>
                  <div>
                    <Input
                      error={errors.endTime}
                      value={data.endTime}
                      onChange={(e) =>
                        setData({ ...data, endTime: e.target.value })
                      }
                      type="time"
                      label="End Time"
                      placeholder="Type End Time"
                      required={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 flex items-center gap-6 border-t border-[#E3E7EC] dark:border-zinc-800">
          <button
            onClick={handleSubmit}
            className="bg-[#0E51F1] text-white px-2.5 py-2 rounded-lg shadow-sm shadow-[#0A3EA8] hover:bg-[#0C46D5] transition duration-200 ease-in-out"
          >
            Create Webinar
          </button>
          <button
            onClick={() => hideModal()}
            className="text-[#0E51F1] font-medium"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWebinarModal;
