const { User } = require("../models");

const userData = [
  {
    username: "blair",
    email: "blair@email.com",
    password: "password123",
  },
  {
    username: "cody",
    email: "cody@email.com",
    password: "password123",
  },
  {
    username: "bubba",
    email: "bubba@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;