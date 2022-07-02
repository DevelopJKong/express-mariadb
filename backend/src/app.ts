import "dotenv/config";
import "./db";
import express, { Express, Handler } from 'express';
import morgan from "morgan";
import cors from "cors";
import { sequelize } from './db';

const app: Express = express();
const logger: Handler = morgan('dev'); 

app.use(cors());
const PORT = 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })
});

