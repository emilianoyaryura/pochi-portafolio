import styles from './portfolio.module.css'
import Image from 'next/image'
import { PortfolioProps } from 'ts/models'
import Markdown from 'components/compound/markdown'
import Link from 'next/link'
import Arrow from 'components/icons/arrow'

const PortfolioPreview = ({ image, title, idx, slug }: PortfolioProps) => {
  return (
    <div className={styles.portfolio}>
      {idx % 2 != 0 && (
        <div className={styles.portfolio__description__right}>
          <h1>
            <Markdown>{title}</Markdown>
          </h1>
          <Link href={`portfolio/${slug}`}>
            <div>
              <a className="link__decoration">See project</a>
              <i>
                <Arrow />
              </i>
            </div>
          </Link>
          <h2>{idx + 1}</h2>
        </div>
      )}
      <div
        className={styles.image}
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
          <Link href={`portfolio/${slug}`}>
            <div>
              <i>
                <Arrow />
              </i>
              <a className="link__decoration">See project</a>
            </div>
          </Link>
          <h2>{idx + 1}</h2>
        </div>
      )}
      <div className={styles.portfolio__description__mobile}>
        <h1>
          <Markdown>{title}</Markdown>
        </h1>
        <div className={styles.portfolio__description__mobile__container}>
          <h2>{idx + 1}</h2>
          <Link href={`portfolio/${slug}`}>
            <div className={styles.portfolio__description__mobile__link}>
              <i>
                <Arrow />
              </i>
              <a className="link__decoration">See project</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPreview
