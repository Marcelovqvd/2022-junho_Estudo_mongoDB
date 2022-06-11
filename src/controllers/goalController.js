const getGoals = (request, response) => {
    return response.status(200).json({msg: 'Get goals'})
}

const setGoal = (request, response) => {
    return response.status(200).json({msg: 'Set goals'})
  }


export { getGoals, setGoal }
