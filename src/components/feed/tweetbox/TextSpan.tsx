import { ReactNode } from "react";

interface Props {
	offsetKey: string;
	children: ReactNode;
}

const TextSpan = ({ offsetKey, children }: Props) => {
	return (
		<span className="text-blue-500" data-offset-key={offsetKey}>
			{children}
		</span>
	);
};

export default TextSpan;
