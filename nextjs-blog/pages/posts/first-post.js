import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
                {/* <a href="/">Back to home</a> */}
            </h2>
        </Layout>
    )
}