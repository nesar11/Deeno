const env = require('../config/DB');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User')


exports.authMiddleware = function (req, res, next) {
    const json_token = req.headers.authorization
    console.log(json_token)
    console.log(req.headers)
    try {
      if (json_token) {
        console.log(1)
        const user = parseToken(json_token);
        console.log(user)
        console.log(2)
        UserModel.findById(user.userId, function (err, user) {
          console.log('err:', err)
          console.log('user:', user)
          if (err) {
            return res.status(422).json({
              'error': 'Oops! Something went wrong'
            })
          }
          if (user) {
            res.locals.user = user
            next()
          }
          else {
            return res.status(422).json({ 'error': 'Not authorized user' })
          }
        })
      }
      else {
        return res.status(422).json({ 'error': 'Not authorized user' })
      }
    } catch (err) {
      console.log(false)
      res.status(403).json({
        success: false,
        message: err
      })
    }
  }

  function parseToken(token) {
    return jwt.verify(token.split(' ')[1], env.secret)
  }
