import Markdown from 'components/compound/markdown'
import Arrow from 'components/icons/arrow'
import Link from 'next/link'
import styles from './home-hero.module.css'
import Draggable from 'react-draggable'
import Image from 'next/image'

type Props = {
  hero: string | null | undefined
}

const HomeHero = ({ hero }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={`wrapper ${styles.hero__title}`}>
        <Markdown>{hero ?? ''}</Markdown>
      </h1>
      <Draggable defaultPosition={{ x: 50, y: 0 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/obelisco.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 100, y: 550 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/atlanta.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 1100, y: 300 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/babasonicos.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 1050, y: 500 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/borges.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 600, y: 400 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/drapper.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 700, y: 100 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/churchill.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 50, y: 350 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/neruda.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 300, y: 60 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/wainraich.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 1200, y: 50 }}>
        <div
          className={styles.float}
          style={{ position: 'absolute', cursor: 'grab' }}
        >
          <Image
            src="/floating/senfield.svg"
            width={180}
            height={128}
            draggable={false}
          />
        </div>
      </Draggable>
      <Link href="#portfolio">
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
