import React from "react";
import Modal from "./Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useCreateUser } from "../../api/user/useCreateUser";

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
  const createUserMutation = useCreateUser();

  return (
    <Modal show={show} onClose={onClose}>
      <RegisterForm
        onClose={onClose}
        onOpenLogin={onOpenLogin}
        createUserMutation={createUserMutation}
      />
    </Modal>
  );
};

export default RegisterModal;
