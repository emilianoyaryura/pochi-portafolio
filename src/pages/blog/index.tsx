import PageLayout from 'components/layouts/page-layout'
import Link from 'next/link'
import { getBlogPosts } from '../../../lib/api'
import styles from './blog.module.css'

type Props = {
  blogPosts: any
}

const Blog = ({ blogPosts }: Props) => {
  const firstThird = parseFloat((blogPosts.length / 3).toFixed())
  const secondThird = firstThird * 2
  const lastThird = firstThird * 3

  return (
    <PageLayout selected="blog">
      <div className={styles.container}>
        <div className={styles.container__column}>
          {blogPosts?.slice(0, firstThird).map((each: any, idx: number) => (
            <Link key={idx} href={`blog/${each.fields.slug}`}>
              <div className={styles.post}>
                {each.fields.image && (
                  <img
                    src={`https:${each.fields.image?.fields.file.url}`}
                    alt={each.fields.image?.fields.title}
                  />
                )}
                <h1>{each.fields.title}</h1>
                <p>{each.fields.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.container__column}>
          {blogPosts
            ?.slice(firstThird, secondThird)
            .map((each: any, idx: number) => (
              <Link key={idx} href={`blog/${each.fields.slug}`}>
                <div className={styles.post}>
                  {each.fields.image && (
                    <img
                      src={`https:${each.fields.image?.fields.file.url}`}
                      alt={each.fields.image?.fields.title}
                    />
                  )}
                  <h1>{each.fields.title}</h1>
                  <p>{each.fields.shortDescription}</p>
                </div>
              </Link>
            ))}
        </div>
        <div className={styles.container__column}>
          {blogPosts
            ?.slice(secondThird, lastThird)
            .map((each: any, idx: number) => (
              <Link key={idx} href={`blog/${each.fields.slug}`}>
                <div className={styles.post}>
                  {each.fields.image && (
                    <img
                      src={`https:${each.fields.image?.fields.file.url}`}
                      alt={each.fields.image?.fields.title}
                    />
                  )}
                  <h1>{each.fields.title}</h1>
                  <p>{each.fields.shortDescription}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className={styles.mobileContainer}>
        {blogPosts.map((each: any, idx: number) => (
          <Link key={idx} href={`blog/${each.fields.slug}`}>
            <div className={styles.post}>
              {each.fields.image && (
                <img
                  src={`https:${each.fields.image?.fields.file.url}`}
                  alt={each.fields.image?.fields.title}
                />
              )}
              <h1>{each.fields.title}</h1>
              <p>{each.fields.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
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
