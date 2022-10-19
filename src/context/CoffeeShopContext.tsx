import { createContext, ReactNode, useEffect, useState } from 'react'

import productsData from '../data/productsData.json'
import { useLocalStorage } from '../hooks/useLocalStorage'

export interface Product {
  id: number
  imgUrl: string
  type: string | string[]
  title: string
  description: string
  price: number
}

interface CartItem {
  id: number
  quantity: number
}

interface RequestFormData {
  postcode: string
  street: string
  house_number: string
  district: string
  complement?: string
  city: string
  state: string
  payment: string
}

interface RequestData extends RequestFormData {
  id: string
}

interface CoffeeShopType {
  products: Product[]
  cartItems: CartItem[]
  cartQuantity: number
  requests: RequestData[]
  currentRequest: RequestData | undefined
  newRequestId: string | null
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeItemFromCart: (id: number) => void
  createDeliveryRequest: (data: RequestFormData) => void
}

export const CoffeeShopContext = createContext({} as CoffeeShopType)

interface CoffeeShopProviderProps {
  children: ReactNode
}

export function CoffeeShopContextProvider({
  children
}: CoffeeShopProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    '@CoffeeDelivery:cart',
    []
  )

  const [requests, setRequests] = useState<RequestData[]>([])
  const [newRequestId, setNewRequestId] = useState<string | null>(null)

  const currentRequest = requests.find(request => request.id === newRequestId)

  useEffect(() => {
    const getProducts = () => setProducts(productsData)

    getProducts()
  }, [])

  const cartQuantity = cartItems.length

  function getItemQuantity(id: number) {
    const currentItems = [...cartItems]
    const currentItemQuantity =
      currentItems.find(item => item.id === id)?.quantity || 0

    return currentItemQuantity
  }

  function increaseItemQuantity(id: number) {
    const currentItems = [...cartItems]
    const currentItemId = currentItems.find(item => item.id === id)

    setCartItems(currentItems => {
      if (currentItemId == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: number) {
    const currentItems = [...cartItems]
    const currentItemQuantity = currentItems.find(
      item => item.id === id
    )?.quantity

    setCartItems(currentItems => {
      if (currentItemQuantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItemFromCart(id: number) {
    const currentItems = [...cartItems]
    const updatedItemsList = currentItems.filter(item => item.id !== id)

    setCartItems(updatedItemsList)
  }

  function createDeliveryRequest(data: RequestFormData) {
    const id = String(new Date().getTime())

    const newRequest: RequestData = {
      id,
      postcode: data.postcode,
      street: data.street,
      house_number: data.house_number,
      complement: data.complement,
      district: data.district,
      city: data.city,
      state: data.state,
      payment: data.payment
    }

    setRequests(state => [...state, newRequest])
    setNewRequestId(id)
  }

  return (
    <CoffeeShopContext.Provider
      value={{
        products,
        cartItems,
        cartQuantity,
        requests,
        currentRequest,
        newRequestId,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        createDeliveryRequest
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
