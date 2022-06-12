import { Router } from 'express'
import { getGoal, setGoal, updateGoal, deleteGoal } from '../controllers/goalController.js'

const router = Router()

router.get("/", getGoal).get("/", setGoal)
router.post(":id/", updateGoal).put("/:id", deleteGoal)

export { router }
