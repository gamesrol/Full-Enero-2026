// const User = require('../models/users');
const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

async function createUser(req, res) {

  try {
    const { name, email, password } = req.body; 
    const newUser = await prisma.user.create({
      data: {
        name, email, password
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
}

async function getUsers(req, res) {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users', error });
//   }
  res.status(200).json([{ id: 1, name: 'Mock User', email: 'mockuser@example.com' }]);
}

module.exports = { createUser, getUsers };