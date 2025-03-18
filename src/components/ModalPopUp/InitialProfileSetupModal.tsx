import React from "react";
import Modal from "./Modal";
import InitialProfileSetupForm from "../InitialProfileSetupForm/InitialProfileSetupForm";

interface InitialProfileSetupModalProps {
  show: boolean;
  onClose: () => void;
}

const InitialProfileSetupModal: React.FC<InitialProfileSetupModalProps> = ({
  show,
  onClose,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <InitialProfileSetupForm onClose={onClose} />
    </Modal>
  );
};

export default InitialProfileSetupModal;
