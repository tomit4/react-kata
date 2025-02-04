import { ReactNode, ButtonHTMLAttributes } from "react";
import "./CaretButton.css";

type CaretButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
};

const CaretButton = ({
  onClick,
  href,
  children,
  ...props
}: CaretButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`secondary ${props.className}`}
    >
      {children}
    </button>
  );
};

export default CaretButton;
