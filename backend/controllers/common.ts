import { Request, Response } from 'express';
import { Grade } from '../models/grade';
import { Subject } from '../models/subject';




const get_grades = async (req: Request, res: Response) => {
	try {
        const grades = await Grade.find({})
			.populate({path: 'subjects', model: Subject})

			res.status(200).json(grades)
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}






export { get_grades }