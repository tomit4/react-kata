import { ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children, ...props }: Props) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`primary ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
