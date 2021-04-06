import PageLayout from 'components/layouts/page-layout'
import { getAboutPage } from '../../lib/api'
import { renderBody } from '../../lib/renderer'

type Props = {
  page: any
}

const HomePage = ({ page }: Props) => {
  return (
    <PageLayout selected="about">
      <div className={`small__wrapper about__container`}>
        {renderBody(page)}
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const page = await getAboutPage()

  return {
    props: {
      page: page[0].fields.about ?? null
    }
  }
}

export default HomePage
