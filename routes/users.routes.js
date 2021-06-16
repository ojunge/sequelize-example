
 const router = require('express-promise-router')();
 const usersController = require('../controllers/users.controller');
  
 router.get('/', usersController.findAll);
 
 module.exports = router;