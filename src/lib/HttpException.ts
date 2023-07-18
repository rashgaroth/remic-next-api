/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
import httpCodes from '../utils/statusCode';

class HttpException extends Error {
  readonly statusCode: number;
  readonly message: string = '';

  constructor({ statusCode = httpCodes.INTERNAL_SERVER_ERROR, message = '' }) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
  }
}

export default HttpException;
