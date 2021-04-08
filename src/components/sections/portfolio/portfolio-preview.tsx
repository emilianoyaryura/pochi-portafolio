import styles from './portfolio.module.css'
import Image from 'next/image'
import { PortfolioProps } from 'ts/models'
import Markdown from 'components/compound/markdown'

const PortfolioPreview = ({ image, title, idx }: PortfolioProps) => {
  return (
    <div className={styles.portfolio}>
      {idx % 2 != 0 && (
        <div className={styles.portfolio__description__right}>
          <h1>
            <Markdown>{title}</Markdown>
          </h1>
        </div>
      )}
      <div
        style={{
          maxWidth: '580px',
          maxHeight: '641px',
          overflow: 'hidden'
        }}
      >
        <Image
          src={`https:${image.file.url}`}
          alt={image.title}
          width={image?.file.details.image.width ?? 0}
          height={image?.file.details.image.height ?? 0}
          objectFit="cover"
        />
      </div>
      {idx % 2 == 0 && (
        <div className={styles.portfolio__description__left}>
          <h1>
            <Markdown>{title}</Markdown>
          </h1>
        </div>
      )}
    </div>
  )
}

export default PortfolioPreview
