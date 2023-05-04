import { ReactNode } from "react";

interface Props {
	offsetKey: string;
	children: ReactNode;
}

const OverLimitSpan = ({ offsetKey, children }: Props) => {
	return (
		<span className="bg-red-500" data-offset-key={offsetKey}>
			{children}
		</span>
	);
};

export default OverLimitSpan;
