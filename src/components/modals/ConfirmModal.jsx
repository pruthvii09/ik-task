import { Trash2 } from "lucide-react";
import React from "react";
import { useModal } from "../../context/ModalContext";

const ConfirmModal = ({ onConfirm }) => {
  const { hideModal } = useModal();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 bg-white sm:w-[30%] w-[80%]  rounded-2xl shadow-lg ">
        <div className="text-center flex flex-col items-center justify-center py-3">
          <Trash2 className="text-red-500" />
          <p className="font-medium mt-4">
            Are you sure you want to delete webinar?
          </p>
        </div>
        <div className="flex items-center justify-between px-4 border-t py-3">
          <button
            onClick={() => onConfirm()}
            className="px-2 py-1 bg-red-500 text-white text-sm font-medium rounded-lg"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => hideModal()}
            className="px-2 py-1 text-zinc-500 border border-gray-300 text-sm font-medium rounded-lg"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
