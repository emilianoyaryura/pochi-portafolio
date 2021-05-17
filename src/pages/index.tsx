import CustomHead from 'components/compound/customHead'
import PageLayout from 'components/layouts/page-layout'
import HomeHero from 'components/sections/home-hero/home-hero'
import Portfolio from 'components/sections/portfolio'
import { getHero, getPortfolio } from '../../lib/api'

type Props = {
  hero: string
  portfolio: any
}

const HomePage = ({ hero, portfolio }: Props) => {
  return (
    <PageLayout selected="portfolio">
      <CustomHead />
      <HomeHero hero={hero} />
      <Portfolio data={portfolio} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const hero = await getHero()
  const portfolio = await getPortfolio()

  return {
    props: {
      hero: hero[0].fields.heroTitle ?? null,
      portfolio: portfolio[0].fields.projects ?? null
    }
  }
}

export default HomePage
