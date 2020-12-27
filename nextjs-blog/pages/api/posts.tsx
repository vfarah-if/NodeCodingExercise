import { getSortedPostsData } from '../../lib/posts';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
	const id = req.body.id;
	// console.debug(req);
	res.status(200).json(getSortedPostsData(id));
}
