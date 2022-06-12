const errorHandler = (err, request, response, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  response.status(statusCode)

  response.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}


export { errorHandler }
