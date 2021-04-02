import Footer from 'components/molecules/footer'
import styles from './page-layout.module.css'

type Props = {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className={`wrapper ${styles.wrapper}`}>
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
