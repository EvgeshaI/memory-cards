import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config({ path: '../../.env' });

export const sequelize = new Sequelize({
  host: process.env.POSTGRES_HOST!,
  database: process.env.POSTGRES_DB!,
  port: Number(process.env.POSTGRES_PORT!),
  username: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  dialect: 'postgres',
});
