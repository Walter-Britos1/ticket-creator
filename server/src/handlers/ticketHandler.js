import {
  createTicketController,
  deletedTicketController,
  getAllTicketsController,
  updateTicketController,
} from '../controllers/ticketController.js';

export const createTicketHandler = async (req, res) => {
  const { name, description, difficulty, status, gifUrl, createdAt } = req.body;

  try {
    const newTicket = await createTicketController(
      name,
      description,
      difficulty,
      status,
      gifUrl,
      createdAt
    );
    res.status(201).send(newTicket);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const getAllTicketsHandler = async (req, res) => {
  try {
    const allTickets = await getAllTicketsController();
    res.send(allTickets);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const updateTicketHandler = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedTicket = await updateTicketController(id, updates);
    res.send(updatedTicket);
  } catch (error) {
    if (error.message === 'Ticket not found') {
      res.status(404).send({ message: 'Ticket not found' })
      return;
    } else {
      console.error(error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
};

export const deleteTicketHandler = async (req, res) => {
  const { id } = req.params;

  try {
    await deletedTicketController(id)
    res.send('The ticket was deleted successfully')
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}
