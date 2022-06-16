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

const updateGoal = async (request, response) => {
  const findGoal = await goal.findById(request.params.id)

  if(!findGoal) {
    response.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await goal.findByIdAndUpdate(request.params.id, 
    request.body, {
      new: true
    })

  return response.status(200).json(updatedGoal)
}

const deleteGoal = async (request, response) => {
  const findGoal = await goal.findById(request.params.id)

  if(!findGoal) {
    response.status(400)
    throw new Error('Goal not found')
  }
  
  await findGoal.remove()

  return response.status(200).json({ id: request.params.id})
}

export { getGoal, setGoal, updateGoal, deleteGoal }
