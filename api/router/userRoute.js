const express = require('express');
const user = require('../controllers/UserController');
const router = express.Router();

router.post('/register', user.resgister);
router.post('/login', user.login);
router.get('/', user.allUser)
router.get('/profile', user.authMiddleware, function(req, res){
  res.json({'access':true})
})

module.exports = router;

