import Route from 'express';

const ticketRoute = Route();

ticketRoute.get('/tickets', (req, res) => {
  res.send('esta ruta mostrara la lista de tickets')
});

ticketRoute.post('/ticket', (req, res) => {
  res.send('esta ruta creara un nuevo ticket')
});

ticketRoute.put('/ticket/:id', (req, res) => {
  res.send(`esta ruta actualizara el ticket con el id ${req.params.id}`)
});

export default ticketRoute;