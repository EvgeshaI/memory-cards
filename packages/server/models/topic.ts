import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequalize';

export interface ITopic {
  id: number;
  title: string;
  content: string;
  author_id: number;
}

export const Topic = sequelize.define<Model<ITopic, Omit<ITopic, 'id'>>>(
  'topics',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    author_id: {
      type: DataTypes.INTEGER,
    },
  },
);
