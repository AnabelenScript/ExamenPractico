module.exports = (sequelize, DataTypes) => {
    const biologySexModel = sequelize.define('biologySexModel', {
      id_biology_sex: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name_biology_sex: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
    }, {
      tableName: 'BiologySex',
      timestamps: false
    });
  
    return biologySexModel;
  };
  