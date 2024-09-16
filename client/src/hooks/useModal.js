import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [isCreating, setIsCreating] = useState(true); // Estado para diferenciar entre crear y editar

  const openModalForCreate = () => {
    setIsCreating(true); // Configura para crear
    openModal();
  };

  const openModalForEdit = () => {
    setIsCreating(false); // Configura para editar
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