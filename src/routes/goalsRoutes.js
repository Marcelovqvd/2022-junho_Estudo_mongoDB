import { Router } from 'express'
import { getGoal, setGoal, updateGoal, deleteGoal } from '../controllers/goalController.js'

const goalRoutes = Router()

goalRoutes.get("/", getGoal).post("/", setGoal)
goalRoutes.put("/:id", updateGoal).delete("/:id", deleteGoal)

export { goalRoutes }
