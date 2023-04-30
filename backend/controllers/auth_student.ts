import { Request, Response } from 'express';
import { Student, Teacher } from "../models/user"
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";
import { Note } from '../models/note';
import { Subject } from '../models/subject';
import { Grade } from '../models/grade';
import { generate_token } from './generate_token'








const login = async (req: Request, res: Response) => {
	try {
		const data = req.body

		const user = await Student.findOne({email: data.email})
		if(!user) return res.status(401).json({
			message: "email does not exist",
		})
		
		const matched = await bcrypt.compare(data.password, user.password)
		if(!matched) return res.status(401).json({
			message: "bad password",
		})
	
	
		res.status(201).json({
			message: 'login ok',
			token: generate_token(user, user._id)
		})
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}














const register = async (req: Request, res: Response) => {
	try {
		const data = req.body

		let student = await Student.findOne({email: data.email})
		if(student) return res.status(401).json({
			message: 'email taken'
		})

		const hash_password = await bcrypt.hash(data.password, 10)
		student = new Student({
			username : data.username,
			email : data.email,
			password : hash_password,
			profile_image : data.profile_image,
			current_grade: new ObjectId(data.current_grade),
			current_year: data.current_year,
			createdAt : Date.now(),
			updatedAt : Date.now()
		})
		await (await student.save()).populate({ path: 'current_grade', model: Grade })

		// @ts-ignore
		delete student.password
		// @ts-ignore
		const teachers = await Teacher.find({subjects: { $in: [...student.current_grade.subjects.map(a => a)] }}).select("id username email profile_image subjects").populate({ path: 'subjects', model: Subject})

		let notes: Note[] = []
		for (let i = 0; i < teachers.length; i++) {
			notes.push(
				{
					student: new ObjectId(student._id),
					teacher: new ObjectId(teachers[i]._id),
					// @ts-ignore
					subject: new ObjectId(teachers[i].subjects[0]._id),
					year: 2022,
					notes:{
							tp: 0,
							td: 0,
							exam: 0,
						}
				}
			)
		}
		Note.insertMany(notes)

		res.status(201).json({
			message: student.current_grade,
			teachers: teachers,
			notes: notes,
			token: generate_token(student)
		})
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}









export {
    login, register
}