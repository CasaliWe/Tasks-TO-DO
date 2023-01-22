const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')


router.get('/', TaskController.showTasks)
router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.taskRemove)
router.get('/edit/:id', TaskController.updateTask)  
router.post('/edit', TaskController.updateSaveTask)  
router.post('/status', TaskController.updateStatus)
router.get('/descri/:id', TaskController.descriTask)  


module.exports = router