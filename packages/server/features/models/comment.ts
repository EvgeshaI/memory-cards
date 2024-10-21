module.exports = (sequelize: any, DataTypes: any) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    parentId: DataTypes.INTEGER, // for recursive comments
  });

  Comment.associate = (models: any) => {
    Comment.belongsTo(models.Topic, { foreignKey: 'topicId' });
    Comment.hasMany(models.Comment, { as: 'replies', foreignKey: 'parentId' });
  };

  return Comment;
};
