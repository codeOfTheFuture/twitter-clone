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
			className={`flex justify-center items-center mt-2 p-2 rounded-full ${className}`}
		>
			{children}
		</button>
	);
};

export default SidebarButton;
