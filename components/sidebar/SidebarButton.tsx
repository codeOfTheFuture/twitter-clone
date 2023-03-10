import { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const SidebarButton = ({ onClick = () => {}, children, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-56 h-14 p-2 rounded-3xl ${className}`}>
      {children}
    </button>
  );
};

export default SidebarButton;
