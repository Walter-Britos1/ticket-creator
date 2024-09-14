import axios from 'axios';
import { useState } from 'react';
import { setAllTicket } from '@/redux/sliceTicket';
import { useDispatch, useSelector } from 'react-redux';
import {
  GET_ALL_TICKETS_ENDPOINT,
  CREATE_TICKET_ENDPOINT,
  DELETE_TICKET_ENDPOINT,
} from '@/config/api';
import closeModel from '@/hooks/useModal';

const useTickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);

  const handlerAllTickets = async () => {
    try {
      const { data } = await axios.get(GET_ALL_TICKETS_ENDPOINT);
      dispatch(setAllTicket(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handlerCreateTicket = async (formData) => {
    try {
      const { data } = await axios.post(CREATE_TICKET_ENDPOINT, formData);
      dispatch(setAllTicket([...tickets, data]));
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    difficulty: '',
    status: '',
    gifUrl: '',
    createdAt: new Date(),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handlerCreateTicket(formData);
    setFormData({ name: '', description: '', difficulty: '', status: '' });
    closeModel();
  };

  const handlerDeleteTicket = async (id) => {
    try {
      await axios.delete(`${DELETE_TICKET_ENDPOINT}${id}`);
      dispatch(setAllTicket(tickets.filter((ticket) => ticket.id !== id)));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  return {
    tickets,
    formData,
    handleChange,
    handleSubmit,
    handlerAllTickets,
    handlerCreateTicket,
    handlerDeleteTicket,
  };
};

export default useTickets;
