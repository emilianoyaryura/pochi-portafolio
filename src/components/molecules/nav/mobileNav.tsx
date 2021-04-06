import Close from 'components/icons/close'
import Logo from 'components/icons/logo'
import Menu from 'components/icons/menu'
import Link from 'next/link'
import { useState } from 'react'
import styles from './nav.module.css'
import { NavProps } from './index'
import { getDate } from '../../../../lib/util'

const MobileNav = ({ selected }: NavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  return (
    <div className={styles.mobile__container}>
      <div className={styles.mobile__header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <i
          className={styles.mobile__open__menu}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </i>
      </div>
      {isOpen && (
        <div className={styles.mobile__menu}>
          <i onClick={() => setIsOpen(!isOpen)}>
            <Close />
          </i>
          <div>
            <Link href="">
              <a
                className={`${
                  selected === 'portfolio' && styles.mobile__selected
                } ${styles.mobile__nav__item}`}
              >
                Home
              </a>
            </Link>
            <Link href="">
              <a
                className={`${
                  selected === 'portfolio' && styles.mobile__selected
                } ${styles.mobile__nav__item}`}
              >
                Portfolio
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`${
                  selected === 'about' && styles.mobile__selected
                } ${styles.mobile__nav__item}`}
              >
                About me
              </a>
            </Link>
            <Link href="">
              <a
                className={`${selected === 'blog' && styles.mobile__selected} ${
                  styles.mobile__nav__item
                }`}
              >
                Blog
              </a>
            </Link>
          </div>
          <p className={styles.mobile__date}>{`${getDate(month)}, ${year}`}</p>
        </div>
      )}
    </div>
  )
}

export default MobileNav
