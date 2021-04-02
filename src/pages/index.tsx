import PageLayout from 'components/layouts/page-layout'
import HomeHero from 'components/sections/home-hero'
import { getHero } from '../../lib/api'

type Props = {
  hero: string
}

const HomePage = ({ hero }: Props) => {
  return (
    <PageLayout>
      <HomeHero hero={hero} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const hero = await getHero()

  return {
    props: {
      hero: hero[0].fields.heroTitle ?? null
    }
  }
}

export default HomePage
