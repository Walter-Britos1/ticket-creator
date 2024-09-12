import { Ticket } from '../models/Ticket.js';

export const createTicketController = async (
  name,
  description,
  difficulty,
  status,
  gifUrl,
  createdAt
) => {
  if (!name || !description || !difficulty || !status || !gifUrl || !createdAt)
    throw new Error('All fields are required');

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

export const updateTicketController = async (id, updates) => {
  const ticket = await Ticket.findByPk(id);
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  await ticket.update(updates);

  return ticket;
};

export const deletedTicketController = async (id) => {
  if (!id) {
    throw new Error('Failed to delete ticket');
  }

  const deletedTicket = await Ticket.destroy({
    where: {
      id,
    },
  });

  return deletedTicket;
};
