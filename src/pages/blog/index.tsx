import PageLayout from 'components/layouts/page-layout'
import Link from 'next/link'
import { getBlogPosts } from '../../../lib/api'

type Props = {
  blogPosts: any
}

const Blog = ({ blogPosts }: Props) => {
  return (
    <PageLayout selected="blog">
      {blogPosts?.map((each: any, idx: number) => (
        <Link key={idx} href={`blog/${each.fields.slug}`}>
          {each.fields.title}
        </Link>
      ))}
    </PageLayout>
  )
}
export default Blog

export const getStaticProps = async () => {
  const blogPosts = await getBlogPosts()

  return {
    props: {
      blogPosts: blogPosts ?? null
    }
  }
}
