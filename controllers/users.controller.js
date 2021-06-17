const service = require('../services/users.service');
const {User} = require('../models/');
 exports.findAll = async (req, res) => {
   try {
    const result = await User.findAll();
    res.status(200).send(result);
   } catch (error) {
    res.status(500).send(error); 
   }

 };

 

 
 