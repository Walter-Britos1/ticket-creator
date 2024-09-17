import { Trash2 } from 'lucide-react';
import useTickets from '@/hooks/useTickets'

export default function DeleteButton({ id }) {
  const { handlerDeleteTicket } = useTickets();

  return (
    <button
      onClick={() => handlerDeleteTicket(id)}
      className='p-2 text-[#EF4444] hover:text-[#B91C1C] absolute bottom-4 right-4'
    >
      <Trash2 className='inline-block w-6 h-6' />
    </button>

  );
}