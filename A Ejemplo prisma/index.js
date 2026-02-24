import express from 'express';
import usersRouter from './routers/usersRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
