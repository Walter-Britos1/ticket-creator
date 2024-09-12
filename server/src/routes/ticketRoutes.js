import Route from 'express';
import {
  createTicketHandler,
  deleteTicketHandler,
  getAllTicketsHandler,
  updateTicketHandler
} from '../handlers/ticketHandler.js';

const ticketRoute = Route();

ticketRoute.get('/tickets', getAllTicketsHandler);

ticketRoute.post('/ticket', createTicketHandler);

ticketRoute.put('/ticket/:id', updateTicketHandler);

ticketRoute.delete('/ticket/:id', deleteTicketHandler);

export default ticketRoute;
