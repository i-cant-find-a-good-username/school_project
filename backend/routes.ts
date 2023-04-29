import express, { Express, Request, Response, Router } from 'express';
const router = Router()




import { isUser, isLoginUser, isStudent } from './middleware/types'
import { isAuth } from './middleware/auth'
import { login, register_student, register_teacher, logout } from './controllers/auth'
import { get_notes, get_global_notes } from './controllers/student'





router.post("/login",isLoginUser ,login)
router.post("/register_teacher",isUser ,register_teacher) // teacher input type is the same as user
router.post("/register_student",isStudent ,register_student)
router.post("/logout",isAuth ,logout)

router.get("/get_notes",isAuth ,get_notes)
router.get("/get_global_notes",isAuth ,get_global_notes)







export default router