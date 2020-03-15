const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const billRouter = require('./routers/bill')
const adminRouter = require('./routers/admin')

const app = express()
const port = process.env.PORT || 3001



app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(billRouter)
app.use(adminRouter)






app.listen(port, () => {
    console.log("server is up and running on",port)
})

