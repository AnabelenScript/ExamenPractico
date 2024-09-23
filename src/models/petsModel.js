module.exports = (sequelize, DataTypes) => {
    const petsModel = sequelize.define('petsModel', {
      id_pet: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name_pet: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      age_pet: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_race_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'raceModel', 
            key: 'id_race'
          },
      },
      id_user_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userModel', 
            key: 'id_user'
          },
      },
      id_specie_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'speciesModel', 
            key: 'id_specie'
          },
      }
    }, {
      tableName: 'Pets',
      timestamps: false
    });
  
    return petsModel;
  };
  