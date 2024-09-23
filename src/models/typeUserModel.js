module.exports = (sequelize, DataTypes) => {
    const typeUserModel = sequelize.define('typeUserModel', {
      id_type_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name_type_user: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
    }, {
      tableName: 'TypeUser',
      timestamps: false
    });
  
    return typeUserModel;
  };
  