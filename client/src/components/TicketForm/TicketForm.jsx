import useTickets from '@/hooks/useTickets';

export default function TicketForm() {
  const { register, handleSubmit, errors } = useTickets();

  return (
    <div>
      <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
        <label className='text-sm font-medium'>Name</label>
        <input 
          className='w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500' 
          type='text' 
          {...register('name')}
        />
        {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
        
        <label className='text-sm font-medium'>Description</label>
        <textarea 
          className='w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24' 
          rows='4' 
          {...register('description')}
        />
        {errors.description && <p className='text-red-500 text-xs'>{errors.description.message}</p>}
        
        <label className='text-sm font-medium'>Difficulty</label>
        <select 
          className='w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          {...register('difficulty')}
        >
          <option value=''>Select difficulty</option>
          <option value='easy'>Easy</option>
          <option value='intermediate'>Intermediate</option>
          <option value='hard'>Hard</option>
        </select>
        {errors.difficulty && <p className='text-red-500 text-xs'>{errors.difficulty.message}</p>}
        
        <label className='text-sm font-medium'>Status</label>
        <select 
          className='w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          {...register('status')}
        >
          <option value=''>Select status</option>
          <option value='open'>Open</option>
          <option value='in-progress'>In Progress</option>
          <option value='resolved'>Resolved</option>
        </select>
        {errors.status && <p className='text-red-500 text-xs'>{errors.status.message}</p>}
        
        <button className='w-full px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition'>
          Submit
        </button>
      </form>
    </div>
  );
}
