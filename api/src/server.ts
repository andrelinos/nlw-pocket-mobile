import express from 'express'

import { errorHandling } from './middlewares/error-handling'
import { routes } from './routes'

import { swaggerConfig } from './doc/swagger'

const PORT = 3333
const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandling)

// app.use("/docs", serve, setup(swaggerDocument));

swaggerConfig(app)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
