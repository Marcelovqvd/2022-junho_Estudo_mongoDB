import { Router } from 'express'

import { User } from '../modules/users/entities/user.js'

const usersRoutes = Router()

usersRoutes.get("/", (request, response) => {
  return response.status(200).json({msg: 'User'})
})

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body

  const user = new User(name, email, password)

  return response.status(200).json(user)
})

export { usersRoutes }
