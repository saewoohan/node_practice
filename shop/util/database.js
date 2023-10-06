const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '53982341', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
