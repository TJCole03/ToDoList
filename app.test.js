const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app') 
const PORT = process.env.PORT || 3001
const server = app.listen(`${PORT}`, () => console.log('Testing on PORT'))
const ToDo = require('../models/todo')
let mongoServer; 

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Test endpoints', () => {

    test('Should access list of todo items', async () => {
        const response = await request(app)
        .get('/todos')

        expect(response.body).toMatchObject({})
    })

    test('access specific todo item', async () => {
        const response = await request(app)
            .get('/:id')
        
        expect(response.body).toMatchObject({})
    })


    test('Should create todo item', async () => {
        const response = await request(app)
            .post('/todos')
            .send({ title: 'checking title', description: 'checking description', completed: true })
        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual('checking title')
        expect(response.body.description).toEqual('checking description')
        expect(response.body.completed).toEqual(true)
        expect(response.body).toHaveProperty('created_at')
    })

    test('should update item', async () => {
        const toDoItem = new ToDo({
            title: 'Pickle', 
            description: 'Rick', 
            completed: false
        })
        await toDoItem.save()

        const response = await request(app)
            .put(`/todos/${toDoItem.id}`)
            .send({ title: 'Pickle', description: 'Rick', completed: false })
        
        expect(response.statusCode).toEqual(200)
        //expect(response.body).toHaveProperty('created_at') //using PROPERTY of the schema
        expect(response.body.message).toEqual('updated')
    })


    // test('this needs to update a todo item', async () => {
    //     const toDo = new ToDo({ title: 'hot chicken', description: 'test', completed: false})
    //     await toDo.save()
        
    //     const response = await request(app).put(`/todos/${toDo.id}`).send({ title: 'hot turkey', description: 'test description 2', completed: true })

    //     expect(response.statusCode).toBe(200)
    //     expect(response.body.message).toBe('to do item has been updated')
    // })

    test('should delete', async () => {
        const toDo = new ToDo({
            title: 'Picke',
            description: 'Rick',
            completed: true,
        })
        await toDo.save()

        const response = await request(app)
            .delete(`/todos/${toDo.id}`)
        expect(response.body).toEqual({message: 'deleted'})
    })

})