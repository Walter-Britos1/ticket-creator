import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  difficulty: {
    type: DataTypes.ENUM('easy', 'intermediate', 'hard'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('open', 'in-progress', 'resolved'),
    allowNull: false,
    defaultValue: 'open'
  },
  gifUrl: {
    type: DataTypes.STRING,
    // allowNull: true
  },
  createdAt: {
    type: DataTypes.STRING,
  }
});