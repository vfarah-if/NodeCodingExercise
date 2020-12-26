import Head from 'next/head'
import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';

import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getSortedPostsData().map(post => {
        return {
            params: { id: post.id }
        };
    });
    console.debug('Paths', paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id    
    const postData = getSortedPostsData(params.id);    
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    console.debug('postData:', postData);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}></Date>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}
