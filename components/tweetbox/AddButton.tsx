import { PlusIcon } from "@heroicons/react/solid";

const AddButton = () => {
  return (
    <button className="flex justify-center items-center w-8 h-8 border-2 border-gray-200 rounded-full hover:bg-twitter/10">
      <PlusIcon className="w-4 h-4 text-twitter" />
    </button>
  );
};

export default AddButton;
