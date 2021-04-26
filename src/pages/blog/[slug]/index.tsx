import CustomHead from 'components/compound/customHead'
import PageLayout from 'components/layouts/page-layout'
import { useRouter } from 'next/dist/client/router'
import { getBlogPosts } from '../../../../lib/api'
import { renderBody } from '../../../../lib/renderer'
import { getDate } from '../../../../lib/util'
import Image from 'next/image'

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

  console.log(page)
  return (
    <PageLayout selected="blog">
      <CustomHead />
      <div className={`small__wrapper blogPost__container`}>
        <p className="blog__date">{date}</p>
        <h1 className="blog__title">{page?.fields.title}</h1>
        <p className="blog__description">{page?.fields.shortDescription}</p>
        {page.fields.image && (
          <Image
            alt={page.fields.image.fields.title ?? 'hero image'}
            src={`https:${page.fields.image.fields.file.url}`}
            width={page.fields.image.fields.file.details.image.width}
            height={page.fields.image.fields.file.details.image.height}
          />
        )}
        <div style={{ marginTop: '30px' }}>
          {renderBody(page?.fields.content)}
        </div>
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
