import React, { createContext, useState, useContext, ReactNode } from "react";

interface ModalContextProps {
  showRegisterModal: boolean;
  showLoginModal: boolean;
  showInitialProfileSetupModal: boolean;
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
  toggleInitialProfileSetupModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
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

  return (
    <ModalContext.Provider
      value={{
        showRegisterModal,
        showLoginModal,
        showInitialProfileSetupModal,
        toggleRegisterModal,
        toggleLoginModal,
        toggleInitialProfileSetupModal,
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
