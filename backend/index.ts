import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
//import {bodyParser} from 'body-parser';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT;
const mongo_uri = 'mongodb://127.0.0.1:27017/school_proc'
connect(mongo_uri);









app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});






import router from './routes'



app.use("/",router)






















app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});