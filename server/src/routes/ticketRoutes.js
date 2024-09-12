import Route from 'express';
import { createTicketHandler, getAllTicketsHandler } from '../handlers/ticketHandler.js';

const ticketRoute = Route();

ticketRoute.get('/tickets', getAllTicketsHandler);

ticketRoute.post('/ticket', createTicketHandler);

ticketRoute.put('/ticket/:id', (req, res) => {
  res.send(`esta ruta actualizara el ticket con el id ${req.params.id}`);
});

export default ticketRoute;
