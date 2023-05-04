import { createContext, ReactNode, useState } from "react";

export interface ModalContextType {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

interface ModalProviderProps {
	children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		console.log("Open Model");
		setIsModalOpen(true);
	};
	const closeModal = () => setIsModalOpen(false);

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
