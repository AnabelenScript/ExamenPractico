module.exports = (sequelize, DataTypes) => {
    const friendshipModel = sequelize.define('friendshipModel', {
      id_friendship: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_pet1_friendship: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'petsModel', 
            key: 'id_pet'
          },
      },
      id_pet2_friendship: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'petsModel', 
            key: 'id_pet'
          },
      },
    }, {
      tableName: 'Friendship',
      timestamps: false
    });
  
    return friendshipModel;
  };
  