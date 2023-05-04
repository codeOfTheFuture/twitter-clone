import { SVGProps } from "react";

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
	onClick?: () => void;
}

const SidebarRow = ({ Icon, title, onClick }: Props) => {
	return (
		<div
			onClick={() => onClick?.()}
			className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group"
		>
			<Icon className="h-8 w-8" />
			<p className="hidden xl:flex group-hover:text-twitter text-base sm:text-lg lg:text-xl">
				{title}
			</p>
		</div>
	);
};

export default SidebarRow;
