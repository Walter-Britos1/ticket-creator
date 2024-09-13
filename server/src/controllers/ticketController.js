import { Ticket } from '../models/Ticket.js';
import { BadRequestError, NotFoundError } from '../errors/customError.js';
import { validateRequiredFields } from '../utils/validateFields.js';

export const createTicketController = async (
  name,
  description,
  difficulty,
  status,
  gifUrl,
  createdAt
) => {
  const requiredFields = [
    'name',
    'description',
    'difficulty',
    'status',
  ];

  validateRequiredFields(requiredFields, {
    name,
    description,
    difficulty,
    status,
    gifUrl,
    createdAt,
  });

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
  if (!id) {
    throw new BadRequestError('The "id" field is required');
  }

  const ticket = await Ticket.findByPk(id);
  if (!ticket) {
    throw new Error('Ticket not found');
  }

  const updatableFields = [
    'name',
    'description',
    'difficulty',
    'status'
  ];
  
  validateRequiredFields(updatableFields, updates);

  await ticket.update(updates);

  return ticket;
};

export const deleteTicketController = async (id) => {
  if (!id) {
    throw new BadRequestError('The "id" field is required');
  }

  const deletedTicket = await Ticket.destroy({ where: { id } });

  if (deletedTicket === 0) {
    throw new NotFoundError('Ticket not found');
  }

  return deletedTicket;
};
