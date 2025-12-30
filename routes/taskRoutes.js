import { Router } from "express";
const router = Router();

import TaskController from '../controllers/TaskController.js'

router.get('/', TaskController.showTasks)
router.post('/add', TaskController.createTask)
router.put('/edit', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

export default router