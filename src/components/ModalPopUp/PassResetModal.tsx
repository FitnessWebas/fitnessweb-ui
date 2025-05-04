import React from "react";
import Modal from "./Modal";
import PassResetForm from "../PasswordReset/PassResetForm";

interface PassResetModalProps {
  show: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

const PassResetModal: React.FC<PassResetModalProps> = ({
  show,
  onClose,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <PassResetForm onClose={onClose} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default PassResetModal;
