import CustomHead from 'components/compound/customHead'
import PageLayout from 'components/layouts/page-layout'
import { useRouter } from 'next/dist/client/router'
import { getPortfolio } from '../../../../lib/api'
import styles from '../portfolio.module.css'
import { renderBody } from '../../../../lib/renderer'
import { getDate } from '../../../../lib/util'
import Image from 'next/image'
import Markdown from 'components/compound/markdown'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import NormalArrow from 'components/icons/normal-arrow'

type Props = {
  portfolio: any
}

const Project = ({ portfolio }: Props) => {
  const router = useRouter()
  const { slug } = router.query
  const page = portfolio.filter((each: any) => each.fields.slug === slug)[0]

  const [currentSlide, setCurrentSlide] = useState(2)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    loop: true,
    spacing: 32,
    duration: 700,
    centered: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  const dateParts = (page?.fields.date).split('-')
  const date = `${getDate(parseFloat(dateParts[1]))}, ${dateParts[0]}`

  return (
    <PageLayout selected="portfolio">
      <CustomHead />
      <div className={styles.hero__container}>
        <div className={styles.hero}>
          <h1 className={styles.hero__title}>
            <Markdown>{page.fields.title}</Markdown>
          </h1>
          <div className={styles.hero__content}>
            <p className={styles.hero__subtitle}>
              <Markdown>{page.fields.subtitle}</Markdown>
            </p>
            <Image
              src={`https:${page.fields.image.fields.file.url}`}
              alt={page.fields.image.fields.title}
              width={510}
              height={340}
            />
          </div>
          <p className={styles.hero__date}>{date}</p>
        </div>
      </div>
      <div className={`small__wrapper ${styles.content}`}>
        {renderBody(page.fields.description)}
      </div>
      <div className={styles.slider}>
        <h1>The Process</h1>
        <div className="keen-slider" ref={sliderRef}>
          {page.fields.processImages.map((each: any, idx: number) => (
            <div key={idx} className="keen-slider__slide">
              <img
                src={`https:${each.fields.file.url}`}
                alt={each.fields.file.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.arrows}>
        <button onClick={() => slider.prev()}>
          <NormalArrow />
        </button>
        <div className={styles.arrows__dots}>
          {page.fields.processImages.map((_: any, idx: number) => (
            <div
              key={idx}
              onClick={() => slider?.moveToSlideRelative(idx)}
              style={{
                background:
                  idx == currentSlide ? 'rgba(66, 66, 66, 0.8)' : '#D9D9D9'
              }}
            />
          ))}
        </div>
        <button onClick={() => slider.next()}>
          <NormalArrow />
        </button>
      </div>
    </PageLayout>
  )
}
export default Project

export const getStaticPaths = async () => {
  const portfolio = await getPortfolio()
  const paths = portfolio[0].fields.projects.map((each: any) => ({
    params: { slug: each.fields.slug as string }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async () => {
  const portfolio = await getPortfolio()

  return {
    props: {
      portfolio: portfolio[0].fields.projects ?? null
    }
  }
}
