import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@components/layout';
import { getSortedPostsData, PostData } from '@lib/posts';
import Date from '@components/date';

import utilStyles from '../styles/utils.module.css';

export interface HomeProps {
	allPostsData: Array<PostData>
}

export default function Home({ allPostsData } : HomeProps): JSX.Element {
	return (
		<Layout isHome={true}>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Having worked with Next JS without doing any tutorials, I
					thought I would go back and take nothign for granted.
				</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>
					.)
				</p>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headingLg}>
					Blogs found '{allPostsData.length}'
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export interface AllPostProps {
	props: {
		allPostsData: Array<PostData>
	}
}

export function getStaticProps(): GetStaticPropsResult<AllPostProps> {
	const allPostsData = getSortedPostsData() as Array<PostData>;
	return {
		props: {
			allPostsData
		}
	} as unknown as GetStaticPropsResult<AllPostProps>;
}