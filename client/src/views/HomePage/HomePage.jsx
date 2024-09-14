import TicketList from '@/components/TicketList/TicketList';
import TicketForm from '@/components/TicketForm/TicketForm';
import useModal from '@/hooks/useModal';

export default function HomePage() {
  const { isModalOpen, openModal, showModalContent, closeModal, handleOutsideClick } = useModal();

  return (
    <div className='p-6 bg-gray-100 min-h-screen relative'>
      <h1 className='text-3xl font-bold mb-6'>Tickets Creator</h1>
      <button
        className='absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition'
        onClick={openModal}
      >
        New Ticket
      </button>
      <TicketList />
      {isModalOpen && (
        <div
          id='modalBackground' // Asignamos un ID al fondo del modal
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300'
          onClick={handleOutsideClick} // Manejador para detectar clic fuera del contenido
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-all duration-300 ease-in-out ${showModalContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            onClick={(event) => event.stopPropagation()} // Evita que el clic en el contenido cierre el modal
          >
            <button
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
              onClick={closeModal}
            >
              X
            </button>
            <TicketForm />
          </div>
        </div>
      )}
    </div>
  );
}
