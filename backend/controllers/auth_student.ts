import { Request, Response } from 'express';
import { Student, Teacher } from "../models/user"
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";
import { Note } from '../models/note';
import { Subject } from '../models/subject';
import { Grade } from '../models/grade';




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
			grade: new ObjectId(data.grade),
			year: data.year,
			createdAt : Date.now(),
			updatedAt : Date.now()
		})
		await (await student.save()).populate({ path: 'grade', model: Grade })
		student.password = ""
		
		// @ts-ignore
		const teachers = await Teacher.find({subjects: { $in: [...student.grade.subjects.map(a => a)] }}).select("id username email profile_image subjects").populate({ path: 'subjects', model: Subject})
		let notes: Note[] = []
		for (let i = 0; i < teachers.length; i++) {
			notes.push(
				{
					student: new ObjectId(student._id),
					teacher: new ObjectId(teachers[i]._id),
					// @ts-ignore
					subject: new ObjectId(teachers[i].subjects[0]._id),
					grade: new ObjectId(data.grade),
					year: 2022,
					notes:{}
				}
			)
		}
		Note.insertMany(notes)

		res.status(201).json({
			message: student,
		})
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}




export {
    register
}