import Logo from 'components/icons/logo'
import Link from 'next/link'

import { FiMail } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import styles from './nav.module.css'

export type NavProps = {
  selected?: 'portfolio' | 'about' | 'blog'
}

const Nav = ({ selected }: NavProps) => {
  return (
    <div className={styles.sticky}>
      <div className={`wrapper ${styles.container}`}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={styles.nav}>
          <Link href="/#portfolio">
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
        </div>
        <div className={styles.icons}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/salvador.posse/?hl=es-la"
          >
            <FiInstagram size={18} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/PosseSalvador"
          >
            <FiTwitter size={18} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:salvadorgonzaloposse@gmail.com"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav
