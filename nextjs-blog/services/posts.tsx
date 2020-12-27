import { PostData } from '../lib/posts';

export async function getPosts(id?: string): Promise<Array<PostData>|PostData> {
	const allPostsResponse = await fetch(id
			? `http://localhost:3000/api/posts?id=${id}`
			: 'http://localhost:3000/api/posts'
	);
	const response: Array<PostData|PostData> = await allPostsResponse.json();
	return response;
}
