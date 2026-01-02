import { Router } from "express";
const router = Router();

import TaskController from '../controllers/TaskController.js'

router.get('/', TaskController.showTasks)
router.get('/create', TaskController.createTask)
router.post('/createSave', TaskController.createTaskSave)
router.get('/edit/:id', TaskController.updateTask)
router.post('/editSave', TaskController.updateTaskSave)
router.post('/delete', TaskController.deleteTask)
router.post('/toggleStatus', TaskController.toggleStatus)

export default router