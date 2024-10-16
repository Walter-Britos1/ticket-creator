import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DIALECT = process.env.DB_DIALECT;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

const connectionDataBase = async (force) => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');

    await sequelize.sync({ force }); 
    console.log('Modelos sincronizados.');
  } catch (err) {
    console.error('No se pudo conectar a la base de datos:', err);
  }
};

export { sequelize, connectionDataBase };