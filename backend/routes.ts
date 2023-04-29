import express, { Express, Request, Response, Router } from 'express';
const router = Router()




import { func } from './controllers/student'
import { isUser, isLoginUser, isRegisterUser } from './middleware/types'
import { isAuth } from './middleware/auth'
import { login, register, logout } from './controllers/auth'





router.post("/",isUser ,func)
router.post("/login",isLoginUser ,login)
router.post("/register",isRegisterUser ,register)
router.post("/logout",isAuth ,logout)



router.get("/my_notes",isAuth ,(req: Request, res: Response) => {
    res.status(401).json({
		message: "hellol there",
		data: res.locals.user_data,
	})
})




export default router