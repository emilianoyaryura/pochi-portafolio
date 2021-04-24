import Footer from 'components/molecules/footer'
import Nav from 'components/molecules/nav'
import MobileNav from 'components/molecules/nav/mobileNav'
import styles from './page-layout.module.css'

type Props = {
  children: React.ReactNode
  selected?: 'portfolio' | 'about' | 'blog'
}

const PageLayout = ({ children, selected }: Props) => {
  return (
    <div>
      <Nav selected={selected} />
      <MobileNav selected={selected} />
      <div className={`wrapper ${styles.wrapper}`}>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
