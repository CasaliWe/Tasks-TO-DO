const Task = require('../models/Task')

module.exports = class TaskController {
        static createTask(req,res){
              res.render('tasks/create')
        }


        static async createTaskSave(req,res){
                 
                const task = {
                    title: req.body.title,
                    description: req.body.description,
                    done: false
                }


                await Task.create(task)

                res.redirect('/')

        }



        static async showTasks(req,res){

            const tasks = await Task.findAll({raw:true})

            let vazio = false

            if(tasks.length == 0){
                vazio = true
            }



            res.render('tasks/all', {tasks, vazio})
        }



        static async taskRemove(req,res){
                const id = req.body.id

                await Task.destroy({where: {id:id}})

                res.redirect('/')
        }



 
        static async updateTask(req,res){
            const id = req.params.id

            const task = await Task.findOne({raw:true, where: {id:id}})

            console.log(task)

            res.render('tasks/edit', { task })
        }

       

        static async updateSaveTask(req, res){
                const id = req.body.id
                 
                const task = {
                      title: req.body.title,
                      description: req.body.description
                }

                await Task.update(task, {where: {id:id}})

                res.redirect('/')
        } 



        static async updateStatus(req,res){
                const id = req.body.id

                const task = {
                    done: req.body.done === '0' ? true : false
                }

                await Task.update(task, {where: {id:id}})

                res.redirect('/')
        }


        static async descriTask(req,res){
                const id = req.params.id

                const task = await Task.findOne({raw: true, where:{id:id}})

                res.render('tasks/descri', {task})
        }
}

