import React from "react";
import styles from "./DropMessage.module.css";

interface PopupMessageProps {
  message: string;
  isVisible: boolean;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ message, isVisible }) => {
  return (
    <div
      className={`${styles.popupMessage} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      {message}
    </div>
  );
};

export default PopupMessage;
