import express, { Express, Request, Response, Router } from 'express';
const router = Router()




import { isUser, isLoginUser, isStudent } from './middleware/types'
import { isAuth } from './middleware/auth'
import { login, register_student, register_teacher, logout } from './controllers/auth'





router.post("/login",isLoginUser ,login)
router.post("/register_teacher",isUser ,register_teacher) // teacher input type is the same as user
router.post("/register_student",isStudent ,register_student)
router.post("/logout",isAuth ,logout)







export default router