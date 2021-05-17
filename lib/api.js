import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getHero() {
  const hero = await client.getEntries({ content_type: 'hero' })

  return hero.items
}

export async function getAboutPage() {
  const aboutPage = await client.getEntries({ content_type: 'pageAbout' })

  return aboutPage.items
}

export async function getPortfolio() {
  const portfolioPage = await client.getEntries({
    content_type: 'pagePortfolio'
  })

  return portfolioPage.items
}

export async function getBlogPosts() {
  const blogPosts = await client.getEntries({
    content_type: 'blogPost'
  })

  return blogPosts.items
}
