import { NextApiRequest, NextApiResponse } from 'next';

import HttpFormatUtils from './HttpFormat';
import { fail } from './responses';

export default function HttpWrapper() {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      console.log(`hello world`);
    } catch (error) {
      return fail(res, error);
    }
  };
}
