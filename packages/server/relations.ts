import { Topic, Comment } from './models';

Topic.hasMany(Comment, { foreignKey: 'topic_id', as: 'comments' });

Comment.belongsTo(Topic, { foreignKey: 'topic_id' });
Comment.hasMany(Comment, { as: 'replies', foreignKey: 'parent_id' });
