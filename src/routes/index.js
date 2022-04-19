import { Router } from 'express'

import { usersRoutes } from './Users.routes.js'

const router = Router()

router.use("/users", usersRoutes)

export { router }
