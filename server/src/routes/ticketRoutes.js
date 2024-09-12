import Route from 'express';
import {
  createTicketHandler,
  getAllTicketsHandler,
  updateTicketHandler,
} from '../handlers/ticketHandler.js';

const ticketRoute = Route();

ticketRoute.get('/tickets', getAllTicketsHandler);

ticketRoute.post('/ticket', createTicketHandler);

ticketRoute.put('/ticket/:id', updateTicketHandler);

export default ticketRoute;
