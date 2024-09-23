module.exports = (sequelize, DataTypes) => {
    const servicesModel = sequelize.define('servicesModel', {
      id_service: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name_service: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
    }, {
      tableName: 'Services',
      timestamps: false
    });
  
    return servicesModel;
  };
  