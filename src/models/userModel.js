module.exports = (sequelize, DataTypes) => {
    const userModel = sequelize.define('userModel', {
      id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username_user: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      password_user: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      name_user: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      lastname_user: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
      tableName: 'Users',
      timestamps: false
    });
  
    return userModel;
  };
  