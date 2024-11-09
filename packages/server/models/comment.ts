import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequalize';

export interface IComment {
  id: number;
  content: string;
  topic_id: number;
  parent_id: number | null;
  author_id: number;
}

export const Comment = sequelize.define<Model<IComment, Omit<IComment, 'id'>>>(
  'comments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    topic_id: {
      type: DataTypes.INTEGER,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
    },
  },
);
