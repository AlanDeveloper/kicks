export interface Category {
  name: string
}

export interface Flag {
  name: string
  bg_color: string
}

export interface Sneaker {
  name: string
  src: string
  originalPrice: number
  price: number
  category: Category
  flag: Flag
}
