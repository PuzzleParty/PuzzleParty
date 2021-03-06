const router = require('express').Router()
const {Puzzle, Order} = require('../db/models')
const {userLoggedIn} = require('./gatekeepers')
module.exports = router

router.get('/:userId', userLoggedIn, async (req, res, next) => {
  try {
    const userOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        stillInCart: false
      },
      include: [{model: Puzzle}]
    })
    res.json(userOrders)
  } catch (err) {
    next(err)
  }
})
