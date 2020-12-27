// ISSUe with Windows - https://github.com/vercel/next.js/issues/7755
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join('./lib', 'posts');

export interface PostData {
    contentHtml: string;
    id: string;    
    date: string;
    title: string;
}

export function getSortedPostsData(id?: string | undefined): Array<PostData> | PostData {
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
			} as PostData;
		});

	return id
		? allPostsData.find((post) => post.id === id)
		: allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
