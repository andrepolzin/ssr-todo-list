import Task from '../models/Task.js'

class TaskController {

    static async showTasks(req, res) {
        try {
            let tasks = await Task.findAll({ raw: true})
            res.status(200).render('tasks/all', { tasks: tasks})
        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }


    static async createTask(req, res) {
        const { title, description } = req.body
  

        const newTask = {
            title,
            description,
            done: false
        }

        try {
            const task = await Task.create(newTask)
            res.status(201).json({message: 'New task has been created', task: task}).redirect('/tasks')
        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }


    static async updateTask(req, res) {
        const id = req.body.id

        const updatedTask = {
            title: title,
            description: description,
            // done: 
        }

        try {
            await Task.update(updatedTask, {where: {id: id}})
        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }


    static async deleteTask(req, res) {
        const id = req.params.id

        try {
            await Task.destroy({where: {id: id}})
            res.status(200).json({message: 'User has been deleted'}).redirect('/tasks')
        } catch(error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }
}

export default TaskController
