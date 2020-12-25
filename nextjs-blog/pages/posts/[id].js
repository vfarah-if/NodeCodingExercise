import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts';
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
    return (
        <Layout>            
            <strong>Title: </strong>{postData.title}
            <br />
            <strong>Id: </strong>{postData.id}
            <br />
            <strong>Date: </strong>{postData.date}
        </Layout>
    )
}

