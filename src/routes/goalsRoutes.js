import { Router } from 'express'
import { getGoals, setGoal } from '../controllers/goalController.js'

const goalRoutes = Router()

goalRoutes.get("/", getGoals)

goalRoutes.post("/", setGoal)

goalRoutes.put("/:id", (request, response) => {
  return response.status(200).json({msg: `Update goal ${require.params.id}`})
})

goalRoutes.delete("/:id", (request, response) => {
  return response.status(200).json({msg: `Delete goal ${require.params.id}`})
})

export { goalRoutes }
