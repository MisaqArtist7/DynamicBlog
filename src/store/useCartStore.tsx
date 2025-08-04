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

const getInitialCart = (): Product[] => {
  if (typeof window === 'undefined') return []
  const storedCart = localStorage.getItem('cart')
  return storedCart ? JSON.parse(storedCart) : []
}

export const useCartStore = create<CartState>((set) => ({
  cart: getInitialCart(),
  addToCart: (product) =>
    set((state) => {
      const alreadyInCart = state.cart.find((item) => item.id === product.id)
      if (alreadyInCart) return state
      const updatedCart = [...state.cart, product]
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return { cart: updatedCart }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return { cart: updatedCart }
    }),
}))
