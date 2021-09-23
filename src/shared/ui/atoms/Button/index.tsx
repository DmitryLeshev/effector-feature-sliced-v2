import React from "react";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
