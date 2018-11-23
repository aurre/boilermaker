const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const locations = await Game.findAll({
      attributes: ['id', 'location']
    })
    res.json(locations)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const location = req.body
    const createLocation = await Game.create(location)
    res.json(createLocation)
  } catch (err) {
    next(err)
  }
})
