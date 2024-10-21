import { Client } from 'pg'
import { Sequelize } from 'sequelize'
// @ts-ignore
import Topic from './features/models/topic'
// @ts-ignore
import Comment from './features/models/comment'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      user: POSTGRES_USER,
      host: 'localhost',
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      port: Number(POSTGRES_PORT),
    });

    await client.connect();

    const res = await client.query('SELECT NOW()');
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now);
    client.end();

    return client;
  } catch (e) {
    console.error(e);
  }

  return null;
};
const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const models = {
  Topic: Topic(sequelize),
  Comment: Comment(sequelize),
};

export { sequelize, models };
