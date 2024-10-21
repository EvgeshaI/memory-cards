module.exports = (sequelize: any, DataTypes: any) => {
  const Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  Topic.associate = (models: any) => {
    Topic.hasMany(models.Comment, { foreignKey: 'topicId' });
  };

  return Topic;
};
