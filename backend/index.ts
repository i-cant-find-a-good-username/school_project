import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { rateLimit } from 'express-rate-limit'


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT;
const mongo_uri = 'mongodb://127.0.0.1:27017/school_proc'
connect(mongo_uri);

const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
})

app.use(limiter)
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Authorization");
  	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  	next();
});





app.get('/', (req: Request, res: Response) => {
  	res.send('Express + TypeScript Server');
});






import router from './routes'



app.use("/api",router)








app.listen(port, () => {
 	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});