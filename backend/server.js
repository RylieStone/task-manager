const express = require('express')
const router = require('./router/router')
const server = express()
server.use(express.json())
server.use(router)

const port = process.env.PORT || 9000
server.listen(port, () => {
    console.log('server is running on 9000')
})