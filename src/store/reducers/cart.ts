import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Dish } from '../../types'

export type CartItem = Dish & {
  cartItemId: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action: PayloadAction<CartItem>) {
        state.items.push(action.payload)
      },
      prepare(dish: Dish) {
        return {
          payload: {
            ...dish,
            cartItemId: nanoid()
          }
        }
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.cartItemId !== action.payload)
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    }
  }
})

export const { addToCart, removeFromCart, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer
