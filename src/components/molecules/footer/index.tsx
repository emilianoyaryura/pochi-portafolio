import GitHub from 'components/icons/gitHub'
import Instagram from 'components/icons/instagram'
import Linkedin from 'components/icons/linkedin'
import Twitter from 'components/icons/twitter'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.mail}
        href="mailto:emilianoyaryurat@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        emilianoyaryurat@gmail.com
      </a>
      <div className={styles.icons}>
        <a target="_blank" rel="noopener noreferrer" href="">
          <Instagram />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="">
          <Twitter />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="">
          <Linkedin />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="">
          <GitHub />
        </a>
      </div>
    </div>
  )
}

export default Footer
