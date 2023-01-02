const User = require("../../src/models/user");

const getRegistration = async (req, res) => {
  const body = req.body;
  const newUser = new User({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  });
  await newUser.save();
  res.send("New User Saved");
};

module.exports = getRegistration;