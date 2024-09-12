import server from './src/server.js';
import { connectionDataBase } from './src/config/database.js';

const PORT = process.env.PORT || 3000;
const force = false

server.listen(PORT, async () => {
  await connectionDataBase(force);
  console.log(`Server running in port: ${PORT}`);
});