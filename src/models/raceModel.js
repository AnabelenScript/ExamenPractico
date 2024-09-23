module.exports = (sequelize, DataTypes) => {
    const raceModel = sequelize.define('raceModel', {
      id_race: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name_race: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
    }, {
      tableName: 'Races',
      timestamps: false
    });
  
    return raceModel;
  };
  