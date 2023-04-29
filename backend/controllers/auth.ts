import { Request, Response } from 'express';
import {  } from 'mongoose'
import { Student, Teacher } from "../models/user"
import { UserType, StudentType, TeacherType, UserRegsiter, UserLogin } from "../types"
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";
import { sign, verify } from "jsonwebtoken"
import dotenv from 'dotenv';



const generate_token = (data: UserType) => {
	const port = process.env.JWT_TOKEN_KEY;
	return sign(
		{
			_id : new ObjectId(),
			username : data.username,
			email : data.email,
			profile_image : data.profile_image,
			created:  Math.floor(Date.now() / 1000)
		},
		"secret",
		{ expiresIn: 60 * 60 * 24 * 7} // 1 week
	);
}



const login = async (req: Request, res: Response) => {
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
		token: generate_token(user)
	})
}



















const register_student = async (req: Request, res: Response) => {
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
		current_grade: data.current_grade,
		current_year: data.current_year,
		createdAt : Date.now(),
		updatedAt : Date.now()
	})
	await student.save()

	res.status(201).json({
		message: 'account created',
		token: generate_token(student)
	})
}

const register_teacher = async (req: Request, res: Response) => {
	const data = req.body

	let teacher = await Teacher.findOne({email: data.email})
	if(teacher) return res.status(401).json({
		message: 'email taken'
	})

	const hash_password = await bcrypt.hash(data.password, 10)
	teacher = new Teacher({
		username : data.username,
		email : data.email,
		password : hash_password,
		profile_image : data.profile_image,
		createdAt : Date.now(),
		updatedAt : Date.now()
	})
	await teacher.save()

	res.status(201).json({
		message: 'account created',
		token: generate_token(teacher)
	})
}















const logout = (req: Request, res: Response) => {

}



export {
    login, register_student, register_teacher, logout
}