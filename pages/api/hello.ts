// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mock, Random } from 'mockjs';

type Data = {
  name: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      'list|1-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'name|1': [Random.cname(), Random.cname(), Random.cname()],
          birth: Random.date('yyyy-MM-dd'),
          address: Random.county(true),
        },
      ],
    })
  );
}
