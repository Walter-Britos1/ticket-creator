import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [isCreating, setIsCreating] = useState(true); 

  const openModalForCreate = () => {
    setIsCreating(true); 
    openModal();
  };

  const openModalForEdit = () => {
    setIsCreating(false);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setShowModalContent(true);
    }, 250);
  };

  const closeModal = () => {
    setShowModalContent(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === 'modalBackground') {
      closeModal();
    }
  };

  return {
    isModalOpen,
    showModalContent,
    isCreating,
    openModalForCreate,
    openModalForEdit,
    closeModal,
    handleOutsideClick,
    openModal
  };
};

export default useModal;
