import Logo from 'components/icons/logo'
import Link from 'next/link'
import styles from './nav.module.css'
import { getDate } from '../../../../lib/util'

export type NavProps = {
  selected?: 'portfolio' | 'about' | 'blog'
}

const Nav = ({ selected }: NavProps) => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <div className={`wrapper ${styles.container}`}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className={styles.nav}>
        <Link href="">
          <a
            className={`${selected === 'portfolio' && styles.selected} ${
              styles.nav__item
            }`}
          >
            Portfolio
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${selected === 'about' && styles.selected} ${
              styles.nav__item
            }`}
          >
            About me
          </a>
        </Link>
        <Link href="">
          <a
            className={`${selected === 'blog' && styles.selected} ${
              styles.nav__item
            }`}
          >
            Blog
          </a>
        </Link>
      </div>
      <p className={styles.date}>{`${getDate(month)}, ${year}`}</p>
    </div>
  )
}

export default Nav
