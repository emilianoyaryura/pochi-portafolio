import Markdown from 'components/compound/markdown'
import Arrow from 'components/icons/arrow'
import Nav from 'components/molecules/nav'
import Link from 'next/link'
import styles from './home-hero.module.css'

type Props = {
  hero: string | null | undefined
}

const HomeHero = ({ hero }: Props) => {
  return (
    <div className={styles.container}>
      <Nav />
      <h1 className={styles.hero__title}>
        <Markdown>{hero ?? ''}</Markdown>
      </h1>
      <Link href="#">
        <a className={styles.anchor__link}>
          <p>Keep reading</p>
          <i>
            <Arrow />
          </i>
        </a>
      </Link>
    </div>
  )
}

export default HomeHero
