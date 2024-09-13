class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

class BadRequestError extends CustomError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

class NotFoundError extends CustomError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

class InteralServerError extends CustomError {
  constructor(message = 'Internal Server Error') {
    super(message, 500);
  }
}

export { BadRequestError, NotFoundError, InteralServerError };