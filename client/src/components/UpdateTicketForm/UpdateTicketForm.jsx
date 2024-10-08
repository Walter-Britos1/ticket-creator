import { useState } from 'react';
import useTickets from '@/hooks/useTickets';

const UpdateTicketForm = ({ ticket }) => {
  const { handlerUpdateTicket } = useTickets();
  const [formData, setFormData] = useState({
    name: ticket.name,
    description: ticket.description,
    status: ticket.status,
    difficulty: ticket.difficulty
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handlerUpdateTicket(ticket.id, formData);
  };

  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
      <label className='text-sm font-medium'>Name</label>
      <input
        className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Ticket Name'
      />
      <label className='text-sm font-medium'>Description</label>
      <textarea
        className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32'
        rows='5'
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Description'
      />
      <label className='text-sm font-medium'>Difficulty</label>
      <select
        className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
        name='difficulty'
        value={formData.difficulty}
        onChange={handleChange}
      >
        <option value=''>Select difficulty</option>
        <option value='easy'>Easy</option>
        <option value='intermediate'>Intermediate</option>
        <option value='hard'>Hard</option>
      </select>
      <label className='text-sm font-medium'>Status</label>
      <select
        className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
        name='status'
        value={formData.status}
        onChange={handleChange}
      >
        <option value=''>Select status</option>
        <option value='open'>Open</option>
        <option value='in-progress'>In Progress</option>
        <option value='resolved'>Resolved</option>
      </select>
      <div className='flex space-x-4'>
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-[#10B981] rounded hover:bg-[#059669] transition'
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateTicketForm;