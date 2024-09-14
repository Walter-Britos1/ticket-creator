
export default function TicketForm() {
  return (
    <div>
      <form className='flex flex-col space-y-4'>
        <label className='text-sm font-medium'>Subject</label>
        <input className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500' type='text' />
        <label className='text-sm font-medium'>Description</label>
        <textarea className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32' rows='5' />
        <label className='text-sm font-medium'>Difficulty</label>

        {/* Add options for difficulty levels */}
        <select className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'>
          <option value=''>Select difficulty</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <label className='text-sm font-medium'>Status</label>
        <select className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500'>
          <option value=''>Select status</option>
          <option value='open'>Open</option>
          <option value='in-progress'>In Progress</option>
          <option value='resolved'>Resolved</option>
        </select>
        <button className='w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition'>
          Submit
        </button>
        </form>
    </div>

  )
}
