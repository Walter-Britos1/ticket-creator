import { useState } from 'react';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import UpdateTicketForm from '@/components/UpdateTicketForm/UpdateTicketForm';
import { SquarePen } from 'lucide-react';
import Modal from '@/components/Modal/Modal';
import { formatDateTime } from '@/utils/formatDataTime';

export default function TicketItem({ id, name, description, difficulty, status, gifUrl, createdAt, isNew }) {
  const [isEditing, setIsEditing] = useState(false);
  const { dateStringFormatted, timeStringFormatted } = formatDateTime(createdAt);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 max-w-sm relative transform transition-all duration-500 ${isNew ? 'scale-95 hover:scale-105' : 'scale-100'}`}
    >
      <h2 className='text-xl font-bold mb-2'>{name}</h2>
      <p className='text-gray-700 mb-4'>{description}</p>
      <p className='text-sm text-gray-500'>
        Difficulty: <span className={`font-semibold ${difficulty === 'hard' ? 'text-[#EF4444]' : difficulty === 'intermediate' ? 'text-[#F59E0B]' : 'text-[#10B981]'}`}>{difficulty}</span>
      </p>
      <p className='text-sm text-gray-500'>
        Status: <span className={`font-semibold ${status === 'resolved' ? 'text-green-500' : 'text-yellow-500'}`}>{status}</span>
      </p>
      <p className='text-sm text-gray-500'>
        Created At: {dateStringFormatted} Hrs: {timeStringFormatted}
      </p>

      {gifUrl && (
        <div className='flex justify-center items-center overflow-hidden h-48 w-full mt-4'>
          <img src={gifUrl} alt='Ticket GIF' className='w-full h-full object-cover rounded-lg' />
        </div>
      )}

      <div className='absolute top-2 right-2 flex space-x-2'>
        <button
          onClick={toggleEdit}
          className='p-2 rounded bg-gray-200 hover:bg-gray-300'
          aria-label='Edit Ticket'
        >
          <SquarePen size={20} />
        </button>
        <DeleteButton id={id} />
      </div>

      <Modal isOpen={isEditing} closeModal={toggleEdit}>
        <UpdateTicketForm ticket={{ id, name, description, difficulty, status }} />
      </Modal>
    </div>
  );
}