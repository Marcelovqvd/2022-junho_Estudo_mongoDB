import { goal } from '../models/goalModel.js'

const getGoal = async (request, response) => {
    const goals = await goal.find()
    return response.status(200).json(goals)
}

const setGoal = async (request, response) => {
  const { newGoal } = request.body

  const createGoal = goal.create({
    newGoal: { user: 'Marcelo', text: 'texto'}
  })

    return response.status(200).json('createGoal')
}

const updateGoal = (request, response) => {
  return response.status(200).json({msg: 'Update goals'})
}

const deleteGoal = (request, response) => {
  return response.status(200).json({msg: 'Delete goals'})
}

export { getGoal, setGoal, updateGoal, deleteGoal }
