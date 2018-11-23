const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define('session', {
  points: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Session
