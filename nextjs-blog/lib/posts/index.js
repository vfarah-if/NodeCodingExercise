import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postsDirectory = path.join('./lib', 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    console.debug('File Names', fileNames);
    const allPostsData = fileNames
        .filter(fileName => path.extname(fileName).endsWith('md'))
        .map(fileName => {
        const id = fileName.replace(/\md$/, '');
        const fullPath = path.join(postsDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort((a, b) => (a.date < b.date) ? 1 : -1);
}

