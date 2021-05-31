import { FiMail } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.mail}
        href="mailto:salvadorgonzaloposse@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        salvadorgonzaloposse@gmail.com
      </a>
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
  )
}

export default Footer
