const User = require('../models/User');

exports.findAll = async () => {
   const retorno = await User.findAll({});
   console.log(retorno);
   return retorno; 
};




