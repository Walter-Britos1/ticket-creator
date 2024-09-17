import { useState } from 'react';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import UpdateTicketForm from '@/components/UpdateTicketForm/UpdateTicketForm';
import { SquarePen } from 'lucide-react';
import useModal from '@/hooks/useModal';

export default function TicketItem({ id, name, description, difficulty, status, gifUrl, createdAt, isNew }) {
  const [isEditing, setIsEditing] = useState(false);
  const { openModal, closeModal, isModalOpen, handleOutsideClick, showModalContent } = useModal();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      openModal();
    } else {
      closeModal();
    }
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 max-w-sm relative transform transition-all duration-500 ${isNew ? 'scale-95 hover:scale-105' : 'scale-100'}`}
    >
      <h2 className='text-xl font-bold mb-2'>{name}</h2>
      <p className='text-gray-700 mb-4'>{description}</p>
      <p className='text-sm text-gray-500'>
        Difficulty: <span className={`font-semibold ${difficulty === 'hard' ? 'text-[#EF4444]' : difficulty === 'intermediate' ? 'text-[#F59E0B]' : 'text-[#10B981]'}`}>
          {difficulty}
        </span>

      </p>
      <p className='text-sm text-gray-500'>
        Status: <span className={`font-semibold ${status === 'resolved' ? 'text-green-500' : 'text-yellow-500'}`}>{status}</span>
      </p>
      <p className='text-sm text-gray-500'>Created At: {new Date(createdAt).toLocaleString()}</p>
      {gifUrl && (
        <div className='flex justify-center items-center overflow-hidden h-48 w-full mt-4'>
          <img src={gifUrl} alt='Ticket GIF' className='w-full h-full object-cover rounded-lg' />
        </div>
      )}

      {/* Edit Button */}
      <button
        onClick={toggleEdit}
        className='absolute top-2 right-2 px-4 py-2 rounded'
      >
        <SquarePen size={20} />
      </button>

      {/* Update Ticket Form Modal */}
      {isEditing && isModalOpen && (
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
              onClick={toggleEdit}
            >
              X
            </button>
            <UpdateTicketForm ticket={{ id, name, description, difficulty, status }} />
          </div>
        </div>
      )}

      <DeleteButton id={id} />
    </div>
  );
}
