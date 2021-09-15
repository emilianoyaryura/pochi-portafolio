import Footer from 'components/molecules/footer'
import Nav from 'components/molecules/nav'
import MobileNav from 'components/molecules/nav/mobileNav'
import styles from './page-layout.module.css'

type Props = {
  children: React.ReactNode
  selected?: 'portfolio' | 'about' | 'blog'
  fullSize?: boolean
}

const PageLayout = ({ children, selected, fullSize }: Props) => {
  return (
    <div>
      <Nav selected={selected} />
      <MobileNav selected={selected} />
      <div className={`${!fullSize && 'wrapper'} ${styles.wrapper}`}>
        {children}
      </div>
      <div className="wrapper">
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
