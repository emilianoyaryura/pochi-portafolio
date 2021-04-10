export type PortfolioProps = {
  image: {
    file: {
      url: string
      details: {
        image: {
          width?: number
          height?: number
        }
      }
    }
    title: string
  }
  title: string
  idx: number
  slug: string
}
