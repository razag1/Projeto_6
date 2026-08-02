export type Dish = {
  id: number
  name: string
  description: string
  image: string
}

export type Restaurant = {
  id: number
  name: string
  category: string
  rating: number
  description: string
  image: string
  heroImage: string
  tags: string[]
  menu: Dish[]
}
