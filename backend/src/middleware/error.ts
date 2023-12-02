import { CustomError } from '../utils/CustomError'
import { Request, Response, NextFunction } from 'express'

/**
 * Handles errors thrown in the application, if the error is an instance of CustomError
 * it will be passed to the next middleware in the chain, otherwise it will be wrapped
 * in a CustomError and passed to the next middleware in the chain
 * @param error
 * @param req
 * @param res
 * @param next
 */
export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CustomError) {
    next(error)
  } else {
    next(new CustomError(error.message, 500))
  }
}

/**
 * Sends a response to the client with the error message and errors if available
 * @param error
 * @param req
 * @param res
 * @param next
 */
export const errorResponder = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
  const body = {
    message: error.message,
    errors: error.errors,
  }
  res.status(error.statusCode || 500).json(body)
}
