import express, { Express, Request, Response, Router } from 'express';

const router = Router()




import { func } from './controllers/student'
import { isUser } from './middleware/types'


router.post("/",isUser ,func)















export default router
