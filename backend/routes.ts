import { Router } from 'express';
import { isRegisterTeacher, isLoginUser, isRegisterUser, isGlobalNotesReq, isComplaint } from './middleware/types'
import { isAuth } from './middleware/auth'
import { isAdmin } from './middleware/admin'
import { isTeacher } from './middleware/teacher'
import { register as student_register } from './controllers/auth_student'
import { register as teacher_register } from './controllers/auth_teacher'
import { get_notes, get_global_notes, submit_complaint, delete_complaint } from './controllers/student'
import { edit_notes, add_notes, get_notes as get_notes_teacher } from './controllers/teacher'
import { login } from './controllers/auth'
import { 
    get_students ,add_student ,delete_student, edit_student,
    get_teachers ,add_teacher ,delete_teacher, edit_teacher
   } from './controllers/admin'



const router = Router()








//student auth
router.post("/student/login",isLoginUser ,login)
// for testing only
router.post("/student/register",isRegisterUser ,student_register)


//teacher auth
router.post("/teacher/login",isLoginUser ,login)
// for testing only
router.post("/teacher/register",isRegisterTeacher ,teacher_register)


// student
router.get("/student/notes/",isAuth, get_notes)
router.get("/student/notes_global", isGlobalNotesReq,isAuth, get_global_notes)
router.post("/student/complaint/", isComplaint, isAuth, submit_complaint)
router.delete("/student/complaint/:id", isAuth, delete_complaint)


// teacher
router.get("/teacher/notes/", isAuth, isTeacher, get_notes_teacher)
router.post("/teacher/notes", isAuth, isTeacher, add_notes)
router.put("/teacher/notes/", isAuth, isTeacher, edit_notes)


// admin
router.get("/admin/students", isAuth, isAdmin, ()=>{})
router.get("/admin/teachers", isAuth, isAdmin, ()=>{})

router.post("/admin/student/add", isAuth, isAdmin, student_register)
router.post("/admin/teacher/add", isAuth, isAdmin, teacher_register)

router.put("/admin/teacher/edit/",isAuth ,isAdmin , ()=>{})
router.put("/admin/student/edit/",isAuth ,isAdmin , ()=>{})

router.delete("/admin/teacher/delete/", isAuth, isAdmin, ()=>{})
router.delete("/admin/student/delete/", isAuth, isAdmin, ()=>{})

router.get("/admin/complaints",isAuth ,isAdmin ,()=>{})











export default router