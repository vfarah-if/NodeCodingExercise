import { getSortedPostsData } from '../../lib/posts';

export default function handler(req, res) {
	const id = req.body.id;
	// console.debug(req);
	res.status(200).json(getSortedPostsData(id));
}
