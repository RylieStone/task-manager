const express = require('express')
const { create, get, update, del } = require('./model')
const router = express.Router()

router.post('/tasks', async (req, res) => {
    try {
        const { title, status, created } = req.body
        const task = await create({ title, status, created })
        res.status(201).json(task)
    } catch (err) {
        res.status(422).json({ message: 'please try again' })
    }
})

// GET ALL TASKS
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await get()
        res.status(200).json(tasks)
    } catch {
        res.status(422).json({ message: 'please try again' })
    }
})

// UPDATE TASK
router.patch('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { status } = req.body
        const msg = await update({ id, status })
        res.status(200).json(msg)
    } catch {
        res.status(422).json({ message: 'please try again' })
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id
        await del(id)
        res.status(201).json('deleted')
    } catch (err) {
        res.status(422).json({ message: 'please try again' })
    }
})

module.exports = router
