import React from "react";
import { useModal } from "../context/ModalContext";

const NavBar = () => {
  const { showModal } = useModal();
  return (
    <div className="flex sticky z-20 top-0 w-full bg-white dark:bg-[#151A22] items-center justify-between sm:px-8 px-4 sm:py-4 py-2 border-b border-[#E3E7EC] dark:border-zinc-700">
      <div>
        <h1 className="text-xl font-medium dark:text-white">Webinar</h1>
      </div>
      <div>
        <button
          onClick={() => showModal("create")}
          className="bg-[#0E51F1] text-white px-2.5 py-2 rounded-lg shadow-sm shadow-[#0A3EA8] hover:bg-[#0C46D5] transition duration-200 ease-in-out"
        >
          Add Webinar
        </button>
      </div>
    </div>
  );
};

export default NavBar;
