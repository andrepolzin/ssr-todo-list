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
        res.render('tasks/create')
    }


    static async createTaskSave(req, res) {
        const { title, description } = req.body
  

        const newTask = {
            title,
            description,
            done: false
        }

        try {
            await Task.create(newTask)
            res.status(201).redirect('/tasks')
        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }


    static async updateTask(req, res) {

    }


    static async updateTaskSave(req, res) {
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
        const id = req.body.id

        try {
            await Task.destroy({where: {id: id}})
            res.status(200).redirect('/tasks')
        } catch(error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }
}

export default TaskController
