const Task = require('../models/Task')
const asyncWrapper = require('../async/asyncwrapper')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks =asyncWrapper(async(req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const getSingleTask =asyncWrapper(async (req,res)=>{
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return next(createCustomError(`There is n task with id : ${taskId}`, 404))
        }
        res.status(200).json({task})
})

const updateTack =asyncWrapper(async (req,res)=>{
        const {id:taskId} = req.params
        const content = req.body
        const task = await Task.findOneAndUpdate({_id:taskId},content,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return next(createCustomError(`There is n task with id : ${taskId}`, 404))
        }
        res.status(200).json({task})
})

const deleteTask =asyncWrapper(async (req,res)=>{
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return next(createCustomError(`There is n task with id : ${taskId}`, 404))
        }
        res.status(200).json({task})
})

const createTask =asyncWrapper( async(req, res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

module.exports ={
    getAllTasks,
    getSingleTask,
    createTask,
    updateTack,
    deleteTask
}