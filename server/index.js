const express = require('express')
const cors = require('cors')
const port = 1488

const app = express()

app.use(cors())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/makeOrder', (req, res) => {
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Listening ${port}`)
})