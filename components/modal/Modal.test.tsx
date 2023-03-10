import { render, screen, waitFor } from "@testing-library/react";
import { ModalContext } from "../../contexts/ModalContext";
import Modal from "./Modal";

describe("Modal", () => {
  it("renders modal with given children when open", async () => {
    render(
      <ModalContext.Provider
        value={{
          isModalOpen: true,
          openModal: () => {},
          closeModal: () => {},
        }}>
        <Modal>
          <div data-testid="modal-content">Modal Content</div>
        </Modal>
      </ModalContext.Provider>
    );

    await waitFor(() => {
      const modalContent = screen.getByTestId("modal-content");
      expect(modalContent).toBeInTheDocument();
    });
  });

  it("does not render modal content when closed", async () => {
    render(
      <ModalContext.Provider
        value={{
          isModalOpen: false,
          openModal: () => {},
          closeModal: () => {},
        }}>
        <Modal>
          <div data-testid="modal-content">Modal Content</div>
        </Modal>
      </ModalContext.Provider>
    );

    await waitFor(() => {
      const modalContent = screen.queryByTestId("modal-content");
      expect(modalContent).not.toBeInTheDocument();
    });
  });
});
