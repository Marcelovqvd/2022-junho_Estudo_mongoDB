import { Router } from 'express'

import { goalRoutes } from './goalsRoutes.js'

const router = Router()

router.use("/", goalRoutes)

export { router }
