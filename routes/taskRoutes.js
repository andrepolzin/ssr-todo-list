import { Router } from "express";
const router = Router();

import TaskController from '../controllers/TaskController.js'

router.get('/', TaskController.showTasks)
router.get('/create', TaskController.createTask)
router.post('/createSave', TaskController.createTaskSave)
router.get('/edit', TaskController.updateTask)
router.put('/editSave', TaskController.updateTaskSave)
router.post('/delete', TaskController.deleteTask)

export default router