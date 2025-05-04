import React from "react";
import Modal from "./Modal";
import EmailRequestForm from "../PasswordReset/EmailRequestForm";

interface EmailRequestModalProps {
  show: boolean;
  onClose: () => void;
  OnOpenPassReset: () => void;
  handleSubmit: () => void;
}

const EmailRequestModal: React.FC<EmailRequestModalProps> = ({
  show,
  onClose,
  OnOpenPassReset,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <EmailRequestForm
        onClose={onClose}
        handleSubmit={handleSubmit}
        OnOpenPassReset={OnOpenPassReset}
      />
    </Modal>
  );
};

export default EmailRequestModal;
