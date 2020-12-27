import { getSortedPostsData } from '../../lib/posts';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
	const id = req.query.id as string; // e.g. http://localhost:3000/posts?id=ssg-ssr
	res.status(200).json(getSortedPostsData(id));
}
