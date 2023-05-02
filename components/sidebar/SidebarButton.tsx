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
			className={`flex justify-center items-center w-18 h-18 mt-2 lg:w-48 xl:w-56 lg:h-12 p-2 rounded-full lg:rounded-3xl ${className}`}
		>
			{children}
		</button>
	);
};

export default SidebarButton;
