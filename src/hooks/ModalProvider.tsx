import { createContext, useState } from "react";

export const ModalContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
  numState: 0,
  setNumState: () => {},
});

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [numState, setNumState] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleNumState = () => setNumState((prev) => prev + 1);

  const value = {
    isOpen: isOpen,
    open: openModal,
    close: closeModal,
    numState: numState,
    setNumState: handleNumState,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
