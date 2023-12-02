import { ValidationError } from 'express-validator'

/**
 * Custom error class
 * @class CustomError
 * @extends {Error}
 * @param {string} msg - Error message
 * @param {number} code - Error code
 * @param {ValidationError[]} [errors] - Validation errors if available
 * @returns {CustomError}
 * @example
 * throw new CustomError('Error message', 400, errors)
 */
export class CustomError extends Error {
  public statusCode: number | null = null
  public errors: ValidationError[] | null = null

  constructor(msg: string, code: number, errors?: ValidationError[]) {
    super(msg)
    this.name = Error.name
    this.errors = errors
    this.statusCode = code
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
