import express from 'express';
import cors from 'cors';
import ticketRoute from './routes/ticketRoutes.js';

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('API CREATOR-TICKET v1.0')
});

server.use(ticketRoute);

export default server;