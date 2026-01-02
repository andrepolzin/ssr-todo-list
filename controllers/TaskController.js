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
        const id = req.params.id;

        try {
            const task = await Task.findOne({where: {id: id}, raw: true})
            // console.log('Task from db', task)
            res.status(200).render('tasks/edit', { task })
        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }
    }


    static async updateTaskSave(req, res) {
        console.log('dentro de updateTaskSave')
        const { id, title, description, done } = req.body

        const updatedTask = {
            title: title,
            description: description,
            done: done === '1' ? true : false
        }

        console.log(updatedTask, id)

        try {
            await Task.update(updatedTask, {where: {id: id}})
            res.status(200).redirect('/tasks')
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


    static async toggleStatus(req, res) {
        const id = req.body.id

        const task = {
            done: req.body.done === 'false' ? true : false
        }

        try {
            await Task.update(task, {where: {id: id}})
            res.status(200).redirect('/tasks')
        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'An error occurred, try again'})
        }

    }
}

export default TaskController
