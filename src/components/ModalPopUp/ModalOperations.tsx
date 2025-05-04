import React, { createContext, useState, useContext, ReactNode } from "react";

interface ModalContextProps {
  showRegisterModal: boolean;
  showLoginModal: boolean;
  showEmailRequestModal: boolean;
  showPasswordChangeModal: boolean;
  showInitialProfileSetupModal: boolean;
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
  toggleInitialProfileSetupModal: () => void;
  toggleEmailRequestModal: () => void;
  togglePasswordChangeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEmailRequestModal, setShowEmailRequestModal] = useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const [showInitialProfileSetupModal, setShowInitialProfileSetupModal] =
    useState(false);

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleInitialProfileSetupModal = () => {
    setShowInitialProfileSetupModal(!showInitialProfileSetupModal);
  };

  const toggleEmailRequestModal = () => {
    setShowEmailRequestModal(!showEmailRequestModal);
  };

  const togglePasswordChangeModal = () => {
    setShowPasswordChangeModal(!showPasswordChangeModal);
  };

  return (
    <ModalContext.Provider
      value={{
        showRegisterModal,
        showLoginModal,
        showInitialProfileSetupModal,
        showEmailRequestModal,
        showPasswordChangeModal,
        toggleRegisterModal,
        toggleLoginModal,
        toggleInitialProfileSetupModal,
        toggleEmailRequestModal,
        togglePasswordChangeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
