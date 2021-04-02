import { createClient } from 'contentful'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getHero() {
    const hero = await client.getEntries({content_type: 'hero'})

    return hero.items
}