import { useEffect } from 'react';
import TicketItem from '@/components/TicketItem/TicketItem';
import useTickets from '../../hooks/useTickets';

export default function TicketList() {
  const { handlerAllTickets, tickets } = useTickets();

  useEffect(() => {handlerAllTickets()}, []);

  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
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
            isNew={item.isNew} 
          />
        ))}
      </div>
    </div>
  );
}
