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
	windowMs: 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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