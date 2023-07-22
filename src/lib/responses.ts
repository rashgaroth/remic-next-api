/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable functional/prefer-readonly-type */
import { NextApiResponse } from 'next';

import httpCodes from '../utils/statusCode';

import HttpException from './HttpException';

export const ok = (
  res: NextApiResponse,
  data: Record<string, string>[] | Record<string, string> = [],
  paginationItems = {},
  statusCode: number = httpCodes.OK
) =>
  res.status(statusCode).json({
    success: true,
    data,
    pagination: paginationItems,
  });

export const fail = (
  res: NextApiResponse,
  error: any,
  statusCode: number = httpCodes.INTERNAL_SERVER_ERROR
) => {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      success: false,
      msg: error.message || 'An error occured',
    });
  }
  return res.status(statusCode).json({
    success: false,
    msg: error?.message || 'An error occured',
  });
};
