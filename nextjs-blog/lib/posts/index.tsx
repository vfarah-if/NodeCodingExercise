import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join('./lib', 'posts');

export interface Post {
    contentHtml: string;
    id: string;    
    date: Date;
    title: string;
}

export function getSortedPostsData(id: string | undefined): Array<Post> | Post {
	const fileNames = fs.readdirSync(postsDirectory);
	console.debug('File Names', fileNames);
	const allPostsData = fileNames
		.filter((fileName) => path.extname(fileName).endsWith('md'))
		.map((fileName) => {
			const id = fileName.replace(/\.md$/, '');
			const fullPath = path.join(postsDirectory, fileName);

			const fileContents = fs.readFileSync(fullPath, 'utf-8');
            const matterResult = matter(fileContents);
            console.debug('matterResult', matterResult);
			return {
				id,
				contentHtml: id && matterResult.content,
				...matterResult.data,
			} as Post;
		});

	return id
		? allPostsData.find((post) => post.id === id)
		: allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
