import React from "react";
import Modal from "./Modal";
import LogInForm from "../LogInForm/LogInForm";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  OnOpenRegister: () => void;
  handleSubmit: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  onClose,
  OnOpenRegister,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <LogInForm
        onClose={onClose}
        OnOpenRegister={OnOpenRegister}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default LoginModal;
