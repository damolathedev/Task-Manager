const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTack,
    deleteTask
} = require('../controllers/task')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTack).delete(deleteTask)


module.exports = router