const User = require('../models/User');

exports.findAll = async () => {
  console.log("Bilu");

  User.findByPk(1).then(user => {
    console.log(user);
  });

  console.log("Vai");

  const users = await User.findAll({ raw: true });
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
  return users; 
};




