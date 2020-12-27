import { PostData } from '../lib/posts';

export async function getPosts(
	id?: string
): Promise<Array<PostData> | PostData | null> {
	try {
		const allPostsResponse = await fetch(
			id
				? `http://localhost:3000/api/posts?id=${id}`
				: 'http://localhost:3000/api/posts'
		);
		return await allPostsResponse.json();
	} catch (error) {
		console.error('Failed to get posts by id', id, error);
		return null;
	}
}
