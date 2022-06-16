import { goal } from '../models/goalModel.js'

const getGoal = async (request, response) => {
    const goals = await goal.find()
    return response.status(200).json(goals)
}

const setGoal = async (request, response) => {
  if(!request.body.text) {
    response.status(400)
    throw new Error('Please add some text')
  }

  const createGoal = await goal.create({
    user: request.body.user,
    text: request.body.text
  })

  return response.status(200).json(createGoal)
}

const updateGoal = (request, response) => {
  return response.status(200).json({msg: 'Update goals'})
}

const deleteGoal = (request, response) => {
  return response.status(200).json({msg: 'Delete goals'})
}

export { getGoal, setGoal, updateGoal, deleteGoal }
