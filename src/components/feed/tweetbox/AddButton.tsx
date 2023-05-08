import { PlusIcon } from "@heroicons/react/solid";

interface Props {
	onClick: () => void;
}

const AddButton = ({ onClick }: Props) => {
	return (
		<button
			className="flex justify-center items-center w-8 h-8 border-2 border-gray-200 rounded-full hover:bg-twitter/10"
			onClick={onClick}
		>
			<PlusIcon className="w-4 h-4 text-twitter" />
		</button>
	);
};

export default AddButton;
