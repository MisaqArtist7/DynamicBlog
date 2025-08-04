import { create } from 'zustand';

type Product = {
  id: number
  name: string
  price: number
  offer: number
  image: string
}

interface CartState {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const alreadyInCart = state.cart.find((item) => item.id === product.id)
      if (alreadyInCart) return state 
      return { cart: [...state.cart, product] }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}))