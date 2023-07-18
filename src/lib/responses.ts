/* eslint-disable functional/prefer-readonly-type */
import { NextApiResponse } from 'next';

import httpCodes from '../utils/statusCode';

export const ok200 = (
  res: NextApiResponse,
  data: Record<string, string>[] | Record<string, string>,
  paginationItems = {},
  statusCode: number = httpCodes.OK
) =>
  res.status(statusCode).json({
    success: true,
    data,
    msg: 'success',
    ...paginationItems,
  });
