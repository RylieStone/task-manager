const express = require('express')
const {create, login, updateLover, message} = require('./model')
const {checkreg, usernamecheck, passwordforupdate, restricted} = require('./middleware')
const router = express.Router()

router.post('/register', checkreg, async (req, res) => {
    const {username, password} = req.body
    const user = await create({username, password})
    try {
        res.status(201).json(user)
    } catch {
        res.status(422).json({message: 'please try again'})
    }
})

router.post('/login', usernamecheck, async (req, res) => {
    const {username, password} = req.body
    const user = await login({username, password})
    try {
        if (user.token) {
            res.status(200).json(user)
        } else {
            res.status(422).json(user)
        }
    } catch {
        res.status(422).json({message: 'please try again'})
    }
})

router.post('/secret', passwordforupdate, async (req, res) => {
const user = req.body.username
const message = await updateLover({username: user})
try {
    res.status(200).json(message)
} catch {
    res.status(422).json({message: 'please try again'})
}
})

router.get('/', restricted, async (req, res) => {
    const data = await message({username: req.decoded.username})
    res.status(200).json(data)
})
module.exports = router