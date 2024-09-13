import { createContext, useContext, useState } from "react";
import CreateWebinarModal from "../components/modals/CreateWebinarModal";
import ConfirmModal from "../components/modals/ConfirmModal";
import UpdateWebinarModal from "../components/modals/UpdateWebinarModal";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const showModal = (modalType, modalProps = {}) => {
    setModal({ modalType, modalProps });
  };
  const hideModal = () => {
    setModal(null);
  };
  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modal && <ModalContainer {...modal} />}
    </ModalContext.Provider>
  );
};

const ModalContainer = ({ modalType, modalProps }) => {
  switch (modalType) {
    case "create":
      return <CreateWebinarModal {...modalProps} />;
    case "update":
      return <UpdateWebinarModal {...modalProps} />;
    case "confirm":
      return <ConfirmModal {...modalProps} />;
    default:
      return null;
  }
};
