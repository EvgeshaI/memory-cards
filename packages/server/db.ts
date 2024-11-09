import { sequelize } from './sequalize';
import './relations';

export const createClientAndConnect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (e) {
    console.error(e);
  }
};
