export type TProduct = {
  id: string,
  title: string,
  name: string,
  price: number,
  sizes: string[],
  colors: string[]
}

export type TReviews = {
  id: number,
  author: string,
  stars: number,
  text: string
}