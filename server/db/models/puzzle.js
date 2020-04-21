const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Puzzle = db.define('puzzle', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.0
    }
  },
  pieceCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  dimentions: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://atzcart.s3.ap-south-1.amazonaws.com/uploads/images/categories/default.png'
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
})

module.exports = Puzzle
