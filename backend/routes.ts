import { Router } from 'express';
import { isRegisterTeacher, isLoginUser, isRegisterUser } from './middleware/types'
import { isAuth } from './middleware/auth'
import { login as student_login, register as student_register } from './controllers/auth_student'
import { login as teacher_login, register as teacher_register } from './controllers/auth_teacher'
import { get_notes, get_global_notes, submit_complaint } from './controllers/student'
import { edit_notes, add_notes, get_notes as get_notes_teacher } from './controllers/teacher'
import { 
    get_students ,add_student ,delete_student, edit_student,
    get_teachers ,add_teacher ,delete_teacher, edit_teacher
   } from './controllers/admin'



const router = Router()








//student auth
router.post("/login/student",isLoginUser ,student_login)
router.post("/register/student",isRegisterUser ,student_register)


//teacher auth
router.post("/login/teacher",isLoginUser ,teacher_login)
router.post("/register/teacher",isRegisterTeacher ,teacher_register)


// student
router.get("/student/notes/{id}",isAuth ,get_notes)
router.get("/student/notes_global",isAuth ,get_global_notes)
router.post("/student/complaint/",isAuth , submit_complaint)


// teacher
router.get("/teacher/notes/{id}",isAuth ,get_notes_teacher)
router.post("/teacher/notes",isAuth ,add_notes)
router.put("/teacher/notes/{id}",isAuth ,edit_notes)


// admin
router.get("/admin/students",isAuth ,()=>{})
router.get("/admin/teachers",isAuth ,()=>{})

router.post("/admin/student/add",isAuth ,()=>{})
router.post("/admin/teacher/add",isAuth ,()=>{})

router.put("/admin/teacher/edit/{id}",isAuth ,()=>{})
router.put("/admin/student/edit/{id}",isAuth ,()=>{})

router.delete("/admin/teacher/delete/{id}",isAuth ,()=>{})
router.delete("/admin/student/delete/{id}",isAuth ,()=>{})

router.get("/admin/complaints",isAuth ,()=>{})











export default router