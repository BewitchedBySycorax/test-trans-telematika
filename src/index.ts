import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import indexRoutes from './routes/index';

dotenv.config()

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: path.join(process.cwd(), './client' ) });
});

app.listen(process.env.PORT, () => {
  console.log(`Server has been started on port ${process.env.PORT}`);
});
