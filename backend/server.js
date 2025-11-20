const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const server = express()
server.use(cors({
    origin: 'http://localhost:3000'
}))
server.use(express.json())
server.use(router)
const port = process.env.PORT || 9000
server.listen(port, () => {
    console.log('server is running on 9000')
})