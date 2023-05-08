import { Fragment, ReactNode, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalContext } from "../../contexts/ModalContext";
import { XIcon } from "@heroicons/react/solid";

interface Props {
	children: ReactNode;
}

const Modal = ({ children }: Props) => {
	const { isModalOpen, closeModal } = useContext(ModalContext);

	return (
		<Transition appear show={isModalOpen} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
				<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 z-50">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration=300"
						enterFrom="opacity=0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75" />
					</Transition.Child>

					<span
						className="inline-block align-middle bg-white rounded-lg p-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<button
							className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-gray-200"
							onClick={closeModal}
						>
							<XIcon className="w-5 h-5 text-gray-600" />
						</button>
						{children}
					</span>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
