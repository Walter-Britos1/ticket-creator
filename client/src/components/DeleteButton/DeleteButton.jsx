import { Trash2 } from 'lucide-react';
import useTickets from '@/hooks/useTickets'

export default function DeleteButton({ id }) {
  const { handlerDeleteTicket } = useTickets();

  return (
    <button 
      onClick={() => handlerDeleteTicket(id)} 
      className='p-2 text-red-600 hover:text-red-800 absolute bottom-4 right-4'
    >
      <Trash2 className='inline-block w-6 h-6' />
    </button>
  );
}