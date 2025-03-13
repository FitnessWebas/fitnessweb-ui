import React from "react";
import Modal from "./Modal";
import LogInForm from "../LogInForm/LogInForm";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  OnOpenRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  onClose,
  OnOpenRegister,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <LogInForm onClose={onClose} OnOpenRegister={OnOpenRegister} />
    </Modal>
  );
};

export default LoginModal;
