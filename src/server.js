import express from 'express'
import dotenv from 'dotenv'
import { router } from "./routes/index.js";
import { errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(router);
app.use(errorHandler)


app.listen(port, () => console.log(`Running at ${port}`))
