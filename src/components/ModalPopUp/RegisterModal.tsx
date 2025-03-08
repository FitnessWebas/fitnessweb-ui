import React from "react";
import Modal from "./Modal";
import RegisterForm from "../RegisterForm/RegisterForm";

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <RegisterForm onClose={onClose} />
    </Modal>
  );
};

export default RegisterModal;
