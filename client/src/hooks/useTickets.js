import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllTicket } from '@/redux/sliceTicket';
import { getFilters } from '@/redux/sliceFilters';
import {
  GET_ALL_TICKETS_ENDPOINT,
  CREATE_TICKET_ENDPOINT,
  UPDATE_TICKET_ENDPOINT,
  DELETE_TICKET_ENDPOINT
} from '@/config/api';
import closeModel from '@/hooks/useModal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '@/utils/validation';

const useTickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const filters = useSelector(getFilters);

  const [filteredTickets, setFilteredTickets] = useState([]);
  const [noResults, setNoResults] = useState(false);

  // React Hook Form setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Memoizar applyFilters para evitar cambios innecesarios
  const applyFilters = useCallback((tickets) => {
    let filtered = [...tickets];

    // Aplica los filtros
    if (filters.ticketStatus) {
      filtered = filtered.filter(ticket => ticket.status === filters.ticketStatus);
    }
    if (filters.difficulty) {
      filtered = filtered.filter(ticket => ticket.difficulty === filters.difficulty);
    }
    if (filters.createdTime) {
      const now = new Date();
      const filterDate = new Date();

      switch (filters.createdTime) {
        case 'last-3-days':
          filterDate.setDate(now.getDate() - 3);
          break;
        case 'last-7-days':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'this-month':
          filterDate.setDate(1);
          filterDate.setMonth(now.getMonth());
          break;
        default:
          filterDate.setFullYear(1900);
          break;
      }

      filtered = filtered.filter(ticket => new Date(ticket.createdAt) >= filterDate);
    }

    setFilteredTickets(filtered);
    setNoResults(filtered.length === 0);
  }, [filters]);

  // Memoizar handlerAllTickets para evitar recreaciones innecesarias
  const handlerAllTickets = useCallback(async () => {
    try {
      const { data } = await axios.get(GET_ALL_TICKETS_ENDPOINT);
      dispatch(setAllTicket(data));
      applyFilters(data);
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, applyFilters]);

  const handlerCreateTicket = async (formData) => {
    try {
      const { data } = await axios.post(CREATE_TICKET_ENDPOINT, formData);
      const updatedTickets = [...tickets, data];
      dispatch(setAllTicket(updatedTickets));
      applyFilters(updatedTickets);
      reset(); // Reset the form after successful submission
      closeModel();
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

  const onSubmit = async (data) => {
    await handlerCreateTicket(data);
  };

  const handlerUpdateTicket = async (id, updatedData) => {
    try {
      const { data } = await axios.put(`${UPDATE_TICKET_ENDPOINT}${id}`, updatedData);
  
      const updatedTickets = tickets.map(ticket =>
        ticket.id === id ? { ...ticket, ...data } : ticket
      );
      dispatch(setAllTicket(updatedTickets));
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const handlerDeleteTicket = async (id) => {
    try {
      await axios.delete(`${DELETE_TICKET_ENDPOINT}${id}`);
      const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
      dispatch(setAllTicket(updatedTickets));
      applyFilters(updatedTickets);
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  useEffect(() => {
    applyFilters(tickets);
  }, [tickets, filters, applyFilters]);

  return {
    tickets: filteredTickets,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    handlerAllTickets,
    handlerCreateTicket,
    handlerUpdateTicket,
    handlerDeleteTicket,
    noResults,
    handleChange
  };
};

export default useTickets;
