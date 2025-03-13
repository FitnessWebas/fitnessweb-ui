import React from "react";
import Modal from "./Modal";
import RegisterForm from "../RegisterForm/RegisterForm";

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  show,
  onClose,
  onOpenLogin,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <RegisterForm onClose={onClose} onOpenLogin={onOpenLogin} />
    </Modal>
  );
};

export default RegisterModal;
