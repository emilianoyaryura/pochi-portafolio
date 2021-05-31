import Head from 'next/head'

const defaultOpengraph = {
  title: 'Salvador Gonzalo Posse | Portafolio',
  description: `Bienvenido a mi portafolio!`,
  image: ''
}

const CustomHead = ({ metadata = defaultOpengraph }) => {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=0"
      />
      <meta name="description" content={metadata.description} />

      {/* OG & Facebook */}
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.svg" />
      <link rel="mask-icon" href="/favicon.svg" />
    </Head>
  )
}

export default CustomHead
