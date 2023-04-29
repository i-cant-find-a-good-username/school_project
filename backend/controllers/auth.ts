import { Request, Response } from 'express';
import {  } from 'mongoose'
import { User } from "../models/user"
import { UserType, UserRegsiter, UserLogin } from "../types"
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
			role : data.role,
			profile_image : data.profile_image,
			created:  Math.floor(Date.now() / 1000)
		},
		"secret",
		{ expiresIn: 60 * 60 * 24 * 7} // 1 week
	);
}





const login = async (req: Request, res: Response) => {
	const data = req.body

	const user = await User.findOne({email: data.email})
	if(!user) return res.status(401).json({
		message: "email does not exist",
	})
	
	const matched = await bcrypt.compare(req.body.password, user.password)
	if(!matched) return res.status(401).json({
		message: "bad password",
	})


	res.status(201).json({
		message: 'login ok',
		token: generate_token(user)
	})

}






const register = async (req: Request, res: Response) => {
	const data = req.body
	let user = await User.findOne({email: data.email})
	if(user) return res.status(401).json({
		message: 'email taken'
	})



	const hash_password = await bcrypt.hash(data.password, 10)
	user = new User({
		_id : new ObjectId(),
		username : data.username,
		email : data.email,
		password : hash_password,
		role : data.role,
		profile_image : data.profile_image,
		createdAt : Date.now(),
		updatedAt : Date.now()
	})
	await user.save()






	res.status(201).json({
		message: 'account created',
		token: generate_token(user)
	})
}






const logout = (req: Request, res: Response) => {

}






export {
    login, register, logout
}