import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: cartItem[]
    openCart: () => void
    closeCart: () => void
    emptyCart: () => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [ cartItems, setCartItems ] = useState<cartItem[]>([])
    const [ isOpen, setIsOpen ] = useState(false)

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0    //returns quantity if item exists or reuturns zero
    }

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) { //add to cart functionality
                return [ ...cartItems, { id, quantity: 1 } ]
            } else {
                return currItems.map(item => {                    //increase quantity by 1
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) { //remove from cart functionality
                return currItems.filter( item => item.id !== id)
            } else {
                return currItems.map(item => {                    //increase quantity by 1
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currItems => {
            return currItems.filter( item => item.id !== id)
        })
    }

    function emptyCart(){
        setCartItems(currItems => {
            return currItems.map(item => {
                return { ...item, quantity: 0}
            })
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, openCart, closeCart, cartItems, emptyCart }}>
            {children}
            <ShoppingCart isOpen = {isOpen} />
        </ShoppingCartContext.Provider>
    )
}