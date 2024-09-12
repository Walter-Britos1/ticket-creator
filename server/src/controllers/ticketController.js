import { Ticket } from '../models/Ticket.js';

export const createTicketController = async (
  name,
  description,
  difficulty,
  status,
  gifUrl,
  createdAt,
) => {
  const ticketCreated = await Ticket.create({
    name,
    description,
    difficulty,
    status,
    gifUrl,
    createdAt,
  });

  return ticketCreated;
};

export const getAllTicketsController = async () => {
  const allTickets = await Ticket.findAll();

  return allTickets;
};