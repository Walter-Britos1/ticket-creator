import createTicketController from '../controllers/ticketController.js';

const createTicketHandler = async (req, res) => {
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
    res.status(201).json(newTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default createTicketHandler;