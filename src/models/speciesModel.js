module.exports = (sequelize, DataTypes) => {
    const speciesModel = sequelize.define('speciesModel', {
      id_specie: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name_specie: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
    }, {
      tableName: 'Species',
      timestamps: false
    });
  
    return speciesModel;
  };
  