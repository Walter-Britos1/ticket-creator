import { useSelector } from 'react-redux';
import TicketItem from '@/components/TicketItem/TicketItem';

export default function TicketList() {
  const tickets = useSelector( state => state.tickets.tickets)

  return (
    <div className='p-4 relative'>
      <h2 className='text-2xl font-bold mb-4'>Yours Ticket List</h2>
      <button className='absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition'>
        Agregar Ticket
      </button>
      {tickets.map((item) => (
        <TicketItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          difficulty={item.difficulty}
          status={item.status}
          gifUrl={item.gifUrl}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  )
}
