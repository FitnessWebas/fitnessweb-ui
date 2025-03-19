import React from "react";
import styles from "./Home.module.css";

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const ActionButton = ({
  children,
  variant = "primary",
  className,
  onClick,
}: ActionButtonProps) => {
  return (
    <button
      className={`${styles.actionButton} ${
        variant === "primary" ? styles.primaryButton : styles.secondaryButton
      } ${className ? styles[className] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
