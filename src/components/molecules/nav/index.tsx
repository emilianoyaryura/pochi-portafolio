import Logo from 'components/icons/logo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

type Props = {
  selected?: 'portfolio' | 'about' | 'blog'
}

const Nav = ({ selected }: Props) => {
  const [realMonth, setRealMonth] = useState('')
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()

  useEffect(() => {
    switch (month) {
      case 0:
        setRealMonth('January')
        break
      case 1:
        setRealMonth('February')
        break
      case 2:
        setRealMonth('March')
        break
      case 3:
        setRealMonth('April')
        break
      case 4:
        setRealMonth('May')
        break
      case 5:
        setRealMonth('June')
        break
      case 6:
        setRealMonth('July')
        break
      case 7:
        setRealMonth('Agoust')
        break
      case 8:
        setRealMonth('September')
        break
      case 9:
        setRealMonth('October')
        break
      case 10:
        setRealMonth('November')
        break
      case 11:
        setRealMonth('December')
        break
      default:
        break
    }
  }, [month])

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
        <Link href="">
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
      <p className={styles.date}>{`${realMonth}, ${year}`}</p>
    </div>
  )
}

export default Nav
