module.exports = (sequelize, DataTypes) => {
    const datingModel = sequelize.define('datingModel', {
      id_dating: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_pet_dating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'petsModel', 
            key: 'id_pet'
          },
      },
      id_offer_dating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'offersModel', 
            key: 'id_offers'
          },
      },
      date_dating: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time_dating: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    }, {
      tableName: 'Dating',
      timestamps: false
    });
  
    return datingModel;
  };
  