import type { Sneaker } from './Sneaker'

export interface CartItem extends Sneaker {
  quantity: number
  selectedSize: number
}
