import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css';

export const getStaticProps: GetStaticProps = () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/posts/first-post">
						<a>First Post</a>
					</Link>
				</li>
			</ul>
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