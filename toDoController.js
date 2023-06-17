const ToDo = require('../models/todo')

//getting all todos
exports.listToDo = async (req, res) => {
    try {
        const toDoList = await ToDo.find({})
        res.json(toDoList)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
//new todo
exports.createToDo = async (req, res) => {
    try {
        const createToDo = new ToDo(req.body)
        await createToDo.save()
        res.send(createToDo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//getting specific todo
exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDo.findOne({ _id: req.params.id })
        res.json(toDo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//updating todo
exports.updateToDo = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const toDoItem = await ToDo.findOne({ _id: req.params.id })
        updates.forEach((update) => (toDoItem[update] = req.body[update]));
        await toDoItem.save();
        res.status(200).json({ toDoItem, message: 'updated' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        const toDo = await ToDo.findOne({ _id: req.params.id })
        toDo.deleteOne()
        res.json({ message: 'deleted'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}