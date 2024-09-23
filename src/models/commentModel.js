module.exports = (sequelize, DataTypes) => {
    const commentModel = sequelize.define('commentModel', {
      id_comment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      body_comment: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      id_post_comment: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'postModel', 
            key: 'id_post'
          },
      },
      id_pet_comment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'petsModel', 
            key: 'id_pet'
          },
      }
    }, {
      tableName: 'Comments',
      timestamps: false
    });
  
    return commentModel;
  };
  