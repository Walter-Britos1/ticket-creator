import { Ticket } from '../models/Ticket.js';

const createTicketController = async (
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

export default createTicketController;