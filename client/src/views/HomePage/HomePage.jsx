import TicketList from '@/components/TicketList/TicketList';
import TicketForm from '@/components/TicketForm/TicketForm';
import useModal from '@/hooks/useModal';
import FiltersMenu from '@/components/FiltersMenu/FiltersMenu';

export default function HomePage() {
  const { isModalOpen, openModal, showModalContent, closeModal, handleOutsideClick } = useModal();

  return (
    <div className='p-6 bg-[#F7F7F7] min-h-screen relative'>
      <div className='flex items-center justify-between mb-6'>
        <FiltersMenu />
        <h1 className='text-3xl font-bold text-center flex-grow ml-8'>Tickets Creator</h1>
        <button
          className='bg-[#3B82F6] text-white px-4 py-2 rounded-lg shadow hover:bg-[#2563EB] transition'
          onClick={openModal}
        >
          New Ticket
        </button>

      </div>
      <TicketList />
      {isModalOpen && (
        <div
          id='modalBackground'
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300'
          onClick={handleOutsideClick}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-all duration-300 ease-in-out ${showModalContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            onClick={(event) => event.stopPropagation()}
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
