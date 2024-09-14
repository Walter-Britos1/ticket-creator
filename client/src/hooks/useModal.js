import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setShowModalContent(true);
    }, 250)
  };

  const closeModal = () => {
    setShowModalContent(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300)
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === 'modalBackground') {
      closeModal();
    }
  };

  return {
    isModalOpen,
    showModalContent,
    openModal,
    closeModal,
    handleOutsideClick,
  };
};

export default useModal;