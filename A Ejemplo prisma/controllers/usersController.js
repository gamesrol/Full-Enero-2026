import { prisma } from '../lib/prisma.ts';

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        posts: {
          create: {
            title: 'Hello World',
            content: 'This is my first post!',
            published: true,
          },
        },
      },
      include: {
        posts: true,
      },
    })
    console.log('Created user:', user)
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
}

async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
}

export { createUser, getUsers };