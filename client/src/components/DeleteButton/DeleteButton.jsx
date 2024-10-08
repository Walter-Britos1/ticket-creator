import { Trash } from 'lucide-react';
import useTickets from '@/hooks/useTickets';

export default function DeleteButton({ id }) {
  const { handlerDeleteTicket } = useTickets();

  return (
    <button
      onClick={() => handlerDeleteTicket(id)}
      className='p-1 rounded bg-red-200 hover:bg-red-300'
    >
      <Trash size={15} className='inline-block w-6 h-6' />
    </button>
  );
}