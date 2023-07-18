import { NextApiRequest, NextApiResponse } from 'next'

export default function HttpWrapper() {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      console.log(`hello world`);
    } catch (error) {
      console.error(error);
    }
  };
}
