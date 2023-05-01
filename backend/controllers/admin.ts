import { Request, Response } from 'express';
import { Teacher, Student } from "../models/user"
import { Subject } from "../models/subject"
import { Note } from "../models/note"
import { Complaint } from "../models/complaint"
import { ObjectId } from "mongodb";
import { Types } from 'mongoose';




const get_students = async (req: Request, res: Response) => {
    try {
        const students = await Student.find({}).select('_id username email profile_image subjects')
            .populate('grade')
        res.status(200).json({
            message: students
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}




const get_teachers = async (req: Request, res: Response) => {
    try {
        const teachers = await Teacher.find({}).select('_id username email profile_image subjects isAdmin subjects')
            .populate({ path: 'subjects', model: Subject })

        res.status(200).json({
            message: teachers
        }) 
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}




const delete_student = async (req: Request, res: Response) => {
    try {
        const result = await Student.deleteOne({_id: new ObjectId(req.params.id)})
        if(result.deletedCount !== 0){
            res.status(200).json({
                result: "success"
            })
        }else{
            res.status(404).json({
                message: "student not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: error
        })
    }
}




const delete_teacher = async (req: Request, res: Response) => {
    try {
        const result = await Teacher.deleteOne({_id: new ObjectId(req.params.id)})
        if(result.deletedCount !== 0){
            res.status(200).json({
                result: "success"
            })
        }else{
            res.status(404).json({
                message: "teacher not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: error
        })
    }
}




const edit_student = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await Student.updateOne({_id: new ObjectId(req.params.id)}, data)
        console.log(result)
        if(result.modifiedCount !== 0){
            res.status(200).json({
                result: "success"
            })
        }else{
            res.status(404).json({
                message: "student not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: error
        })
    }
}
const edit_teacher = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await Teacher.updateOne({_id: new ObjectId(req.params.id)}, data)
        if(result.modifiedCount !== 0){
            res.status(200).json({
                result: "success"
            })
        }else{
            res.status(404).json({
                message: "teacher not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: error
        })
    }
}




const get_notes = async (req: Request, res: Response) => {
    try {
        let data = req.body
        const students = await Student.find({grade: data.grade, year: data.year }).select('_id username email profile_image grade year')

        let student_ids = [];
        for (let i = 0; i < students.length; i++) {
            student_ids.push(students[i]._id)
        }

        let complaints = await Complaint.find({ student: { $in : student_ids } })            

        res.status(200).json({
            message: students,
            student_ids: student_ids,
            complaints: complaints,
        }) 
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}




export {
    get_students,
    get_teachers,
    delete_student,
    edit_student,
    delete_teacher,
    edit_teacher,
    get_notes
}