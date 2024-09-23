module.exports = (sequelize, DataTypes) => {
    const offersModel = sequelize.define('offersModel', {
      id_offers: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      price_offers: {
        type: DataTypes.DECIMAL(10,4),
        allowNull: false
      },
      id_user_offers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userModel', 
            key: 'id_user'
          },
      },
      id_service_offers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'servicesModel', 
            key: 'id_service'
          },
      },
    }, {
      tableName: 'Offers',
      timestamps: false
    });
  
    return offersModel;
  };
  