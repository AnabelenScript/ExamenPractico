const Sequelize = require('sequelize');
const config = require('../../config/config.json');
const sequelize = new Sequelize(
'flights_db',
  'root',
  'Ana0507belen',
  {
    host:"localhost",
    dialect: "mysql"
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

db.userModel = require('./userModel')(sequelize, Sequelize);
db.typeUserModel = require('./typeUserModel')(sequelize, Sequelize);
db.postModel = require('./postModel')(sequelize, Sequelize); 
db.petsModel = require('./petsModel')(sequelize,Sequelize);
db.datingModel = require('./datingModel')(sequelize, Sequelize); 
db.friendshipModel = require('./friendshipModel')(sequelize,Sequelize);
db.raceModel = require('./raceModel')(sequelize, Sequelize); 
db.speciesModel = require('./speciesModel')(sequelize, Sequelize);
db.biologySexModel = require('./biologySexModel')(sequelize, Sequelize);
db.commentModel = require('./commentModel')(sequelize, Sequelize);
db.servicesModel = require('./servicesModel')(sequelize, Sequelize);
db.offersModel= require('./offersModel')(sequelize,Sequelize);

module.exports = db;
