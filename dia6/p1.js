import express from 'express';
import pkg from './generated/prisma/client.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Create a new user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email },
  });
  res.status(201).json(newUser);
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default router;