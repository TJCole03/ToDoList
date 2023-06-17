const express = require('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

router.get('/', toDoController.listToDo); //getting stuff from server
router.post('/', toDoController.createToDo); //posting to server
router.get('/:id', toDoController.getToDo); //recieving something specific from server
router.put('/:id', toDoController.updateToDo) //changing something already in server
router.delete('/:id', toDoController.deleteToDo) 


module.exports = router;







// GET /todos: Get all todo items.
// POST /todos: Create a new todo item.
// GET /todos/:id: Get a specific todo item.
// PUT /todos/:id: Update a specific todo item.
// DELETE /todos/:id: Delete a specific todo item.