import React from "react";
import { useModal } from "../context/ModalContext";
import Image from "../asstes/image.png";
import { useDispatch } from "react-redux";
import { deleteWebinar } from "../redux/webinarSlice";
import toast from "react-hot-toast";
const WebinarCard = ({ data, color }) => {
  const { showModal, hideModal } = useModal();
  const dispatch = useDispatch();
  const cardBackgroundColor = { backgroundColor: color };
  const textColor = { color };

  const onConfirm = (id) => {
    dispatch(deleteWebinar(id));
    hideModal();
    toast.success("Deleted successfully!!");
  };

  return (
    <div className="p-4 border h-fit dark:bg-[#1A2029] dark:border-zinc-700 border-gray-300 rounded-3xl">
      <div
        className="px-3 py-4 flex items-center justify-between rounded-2xl"
        style={cardBackgroundColor}
      >
        <div className="text-white">
          <h1 className="text-lg font-medium">{data.instructorName}</h1>
          <p className="text-sm">{data.instructorRole}</p>
          <span className="text-sm">{data.instructorCompany}</span>
        </div>
        <div>
          <img
            src={data.instructorImage ? data.instructorImage : Image}
            className="rounded-md"
            width={76}
            height={76}
            alt="Webinar Instructor"
          />
        </div>
      </div>
      <div className="mt-2 px-1">
        <div>
          <p className="text-sm font-semibold" style={textColor}>
            {data.topics}
          </p>
          <h1 className="text-lg font-semibold dark:text-zinc-200 truncate">
            {data.webinarTitle}
          </h1>
          <p className="text-sm font-normal text-gray-600 dark:text-zinc-200    ">
            {data.webinarStartDate} • {data.startTime} - {data.endTime}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <button
            onClick={() =>
              showModal("confirm", { onConfirm: () => onConfirm(data.id) })
            }
            className="px-4 py-1.5 text-[#D14040] bg-[#F9E8E8] text-sm font-medium rounded-full"
          >
            Delete
          </button>
          <button
            onClick={() => showModal("update", { id: data.id })}
            className="text-[#0E51F1] text-sm font-semibold"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
