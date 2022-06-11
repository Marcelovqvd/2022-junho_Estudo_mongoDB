import { Router } from 'express'

const goalRoutes = Router()

goalRoutes.get("/", (request, response) => {
  return response.status(200).json({msg: 'Get goals'})
})

goalRoutes.post("/", (request, response) => {
  return response.status(200).json({msg: 'Set goals'})
})

goalRoutes.put("/:id", (request, response) => {
  return response.status(200).json({msg: `Update goal ${require.params.id}`})
})

goalRoutes.delete("/:id", (request, response) => {
  return response.status(200).json({msg: `Delete goal ${require.params.id}`})
})

export { goalRoutes }
