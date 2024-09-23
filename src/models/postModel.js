module.exports = (sequelize, DataTypes) => {
    const postModel = sequelize.define('postModel', {
      id_post: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title_post: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      body_post: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      id_user_post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userModel', 
            key: 'id_user'
          },
      }
    }, {
      tableName: 'Posts',
      timestamps: false
    });
  
    return postModel;
  };
  