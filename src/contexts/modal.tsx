import React, { createContext, FC, ReactNode, useState } from 'react';

export const ModalContext = createContext({
  isModalOpen: false,
  toggleModal: (modalKeyVal: string) => null,
  modalKey: ''
});

interface IModalProviderProps {
  children: ReactNode;
  modalKey: string;
}

export const ModalProvider: FC<IModalProviderProps> = (
  props: IModalProviderProps
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Only trigger modals that has matching modal key on the context provider and consumer
  const toggleModal = (modalKeyVal: string) => {
    if (modalKeyVal === props.modalKey) {
      return setIsModalOpen(prevState => !prevState);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        modalKey: props.modalKey
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
