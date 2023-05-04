import { Router } from 'express';
import { isRegisterTeacher, isLoginUser, isRegisterStudent, isGlobalNotesReq, isComplaint, studentEdit, teacherEdit, note } from './middleware/types'
import { isAuth } from './middleware/auth'
import { isAdmin } from './middleware/admin'
import { isTeacher } from './middleware/teacher'
import { isStudent } from './middleware/student'
import { register as student_register } from './controllers/auth_student'
import { register as teacher_register } from './controllers/auth_teacher'
import { get_notes, get_global_notes, get_complaints, submit_complaint, delete_complaint } from './controllers/student'
import { edit_notes, get_notes as get_notes_teacher } from './controllers/teacher'
import { login } from './controllers/auth'
import { 
    get_students ,delete_student, edit_student, get_notes as get_notes_admin,
    get_teachers ,delete_teacher, edit_teacher, 
   } from './controllers/admin'
import { get_grades } from './controllers/common';




const router = Router()




//student auth
router.post("/student/login",isLoginUser ,login)
// for testing only
router.post("/student/register",isRegisterStudent ,student_register)


//teacher auth
router.post("/teacher/login",isLoginUser ,login)
// for testing only
router.post("/teacher/register",isRegisterTeacher ,teacher_register)


// student
router.get("/student/notes/:grade/:year",isAuth, isStudent, get_notes)
router.get("/student/notes_global/:grade/:year", isGlobalNotesReq, isAuth, isStudent, get_global_notes)
router.get("/student/complaints/", isAuth, isStudent, get_complaints)
router.post("/student/complaints/", isComplaint, isAuth, isStudent, submit_complaint)
router.delete("/student/complaints/:id", isAuth, isStudent, delete_complaint)


// teacher
router.get("/teacher/notes/:grade/:year", isAuth, isTeacher, get_notes_teacher)
router.put("/teacher/notes/:id", note, isAuth, isTeacher, edit_notes)


// admin
router.get("/admin/notes", isGlobalNotesReq, isAuth, isAdmin, get_notes_admin)

router.get("/admin/students", isAuth, isAdmin, get_students)
router.get("/admin/teachers", isAuth, isAdmin, get_teachers)

router.post("/admin/student/add", isRegisterStudent, isAuth, isAdmin, student_register)
router.post("/admin/teacher/add", isRegisterTeacher, isAuth, isAdmin, teacher_register)

router.put("/admin/student/:id", studentEdit, isAuth ,isAdmin , edit_student)
router.put("/admin/teacher/:id", teacherEdit, isAuth ,isAdmin , edit_teacher)

router.delete("/admin/student/:id", isAuth, isAdmin, delete_student)
router.delete("/admin/teacher/:id", isAuth, isAdmin, delete_teacher)







router.get("/grades", get_grades)








export default router