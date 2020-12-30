import Head from 'next/head';
// import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '@components/layout';
import { PostData } from '@lib/posts';
import Date from '@components/date';
import { getPosts } from '@services/posts';

import utilStyles from '../../styles/utils.module.css';

export interface PostProps {
	postData: PostData;
}

export default function Post({ postData }: PostProps) {
	return (
		<Layout>
			{postData ? (
				<>
					<Head>
						<title>{postData.title}</title>
					</Head>
					<article>
						<h1 className={utilStyles.headingXl}>
							{postData.title}
						</h1>
						<div className={utilStyles.lightText}>
							<Date dateString={postData.date}></Date>
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: postData.contentHtml,
							}}
						/>
					</article>
				</>
			) : (
				<>
				<Head>
					<title>Not found</title>
				</Head>
				<h1>Not Found</h1>
				</>
			)}
		</Layout>
	);
}

Post.getInitialProps = async (context: any) => {
	const id = context.query.id as string;
	console.debug('Id:', id);
	const postData = (await getPosts(id)) as PostData;
	return {
		postData,
	};
};

// Static does not dynamically call the page
// export interface IdParams {
//     params: {
//         id: string
//     }    
// }

// export async function getIdPaths(): Promise<Array<IdParams>> {
// 	const allResponse = await getPosts() as Array<PostData>;
//     return allResponse.map((post: PostData) => {
//         return {
//             params: { id: post.id },
//         } as IdParams;
//     });	
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const paths = await getIdPaths();
// 	console.debug('Paths', paths);
// 	return {
// 		paths,
// 		fallback: true,
// 	};
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	// Fetch necessary data for the blog post using params.id
// 	const postData = await getPosts(params.id as string) as PostData;
// 	return {
// 		props: {
// 			postData,
// 		},
// 	};
// };
