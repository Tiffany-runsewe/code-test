import Link from 'next/link'
import Layout from '@/components/Layout'

export default function about() {
    return (
        <Layout title='About page'>
            <h1>About</h1>
            <p>This is about page</p>
            <Link href="/">Home</Link>
        </Layout>
    )
}
