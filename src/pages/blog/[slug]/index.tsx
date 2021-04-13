import PageLayout from 'components/layouts/page-layout'
import { useRouter } from 'next/dist/client/router'
import { getBlogPosts } from '../../../../lib/api'
import { renderBody } from '../../../../lib/renderer'
import { getDate } from '../../../../lib/util'

type Props = {
  blogPosts: any
}

const Blog = ({ blogPosts }: Props) => {
  const router = useRouter()
  const { slug } = router.query
  const page = blogPosts.filter((blog: any) => blog.fields.slug === slug)[0]
  const dateParts = (page?.fields.date).split('-')
  const date = `${getDate(parseFloat(dateParts[1]))} ${dateParts[2]}, ${
    dateParts[0]
  }`
  return (
    <PageLayout selected="blog">
      <div className={`small__wrapper blogPost__container`}>
        <p className="blog__date">{date}</p>
        <h1 className="blog__title">{page?.fields.title}</h1>
        {renderBody(page?.fields.content)}
        <p className="blog__author">{page?.fields.author}</p>
        <p className="blog__date">{date}</p>
      </div>
    </PageLayout>
  )
}
export default Blog

export const getStaticPaths = async () => {
  const blogPosts = await getBlogPosts()
  return {
    paths:
      blogPosts?.map((post) => ({
        params: { slug: post?.fields.slug as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps = async () => {
  const blogPosts = await getBlogPosts()

  return {
    props: {
      blogPosts: blogPosts ?? null
    }
  }
}
