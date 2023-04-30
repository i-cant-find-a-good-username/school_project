import { Router } from 'express';
import { isRegisterTeacher, isLoginUser, isRegisterUser } from './middleware/types'
import { isAuth } from './middleware/auth'
import { login as student_login, register as student_register } from './controllers/auth_student'
import { login as teacher_login, register as teacher_register } from './controllers/auth_teacher'
import { get_notes, get_global_notes, submit_complaint } from './controllers/student'
import { edit_notes, add_notes, get_notes as get_notes_teacher } from './controllers/teacher'
import {  } from './controllers/admin'



const router = Router()








//student auth
router.post("/login/student",isLoginUser ,student_login)
router.post("/register/student",isRegisterUser ,student_register)


//teacher auth
router.post("/login/teacher",isLoginUser ,teacher_login)
router.post("/register/teacher",isRegisterTeacher ,teacher_register)


// student
router.get("/student/notes",isAuth ,get_notes)
router.get("/student/notes_global",isAuth ,get_global_notes)
router.post("/student/complaint",isAuth , submit_complaint)


// teacher
router.get("/teacher/notes",isAuth ,get_notes_teacher)
router.post("/teacher/notes",isAuth ,add_notes)
router.put("/teacher/notes",isAuth ,edit_notes)


// admin
router.get("/admin/student/add",isAuth ,()=>{})
router.put("/admin/student/edit",isAuth ,()=>{})
router.delete("/admin/student/delete",isAuth ,()=>{})

router.get("/admin/teacher/add",isAuth ,()=>{})
router.put("/admin/teacher/edit",isAuth ,()=>{})
router.delete("/admin/teacher/delete",isAuth ,()=>{})












export default router