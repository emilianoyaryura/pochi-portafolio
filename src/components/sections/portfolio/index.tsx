import PortfolioPreview from './portfolio-preview'
import styles from './portfolio.module.css'

const Portfolio = ({ data }: any) => {
  return (
    <div className={styles.container} id="portfolio">
      {data?.map((portfolio: any, idx: number) => (
        <div
          key={idx}
          className={styles.mapped__portfolio}
          style={{ alignSelf: idx % 2 == 0 ? 'flex-start' : 'flex-end' }}
        >
          <PortfolioPreview
            slug={portfolio.fields.slug}
            title={portfolio.fields.title}
            image={portfolio.fields.image.fields}
            idx={idx}
          />
        </div>
      ))}
    </div>
  )
}

export default Portfolio
