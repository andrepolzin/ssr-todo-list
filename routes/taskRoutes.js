import { Router } from "express";
const router = Router();

import TaskController from '../controllers/TaskController.js'

router.get('/', TaskController.showTasks)
router.get('/create', TaskController.createTask)
router.post('/createSave', TaskController.createTaskSave)
router.put('/edit', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

export default router