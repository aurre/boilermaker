const Game = require('./game')
const Player = require('./player')
const Session = require('./session')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Game.hasMany(Session, {as: 'sessionPlayed', constraints: false}) // all session has a gameId
Player.hasMany(Session, {as: 'playedHand', constraints: false}) // all session has a playerId

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Game,
  Player,
  Session
}
