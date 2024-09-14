import axios from 'axios';
import { setAllTicket } from '@/redux/sliceTicket';
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_TICKETS_ENDPOINT } from '@/config/api';
 
const useTickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);

  const handlerAllTickets = async () => {
    try {
      const { data } = await axios.get(GET_ALL_TICKETS_ENDPOINT);
      dispatch(setAllTicket(data));
    } catch (error) {
      console.error(error);
    }
  }

  

  return { tickets, handlerAllTickets };
};

export default useTickets;