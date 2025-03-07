import { useReducer } from "react"
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {

  const initialState = []

   const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[CART] Add product':
        return [...state, action.payLoad]
      case '[CART] Remove product':
        return state.filter(product => product.id !== action.payLoad )
      case '[CART] Increment Quantity':
        return state.map(product => {
          const cant = product.quantity + 1
          if(product.id == action.payLoad) return {...product, quantity: cant }
          return product
        })
      
      case '[CART] Decrement Quantity':
         return state.map(product => {
          const cant = product.quantity - 1
          if(product.id == action.payLoad && product.quantity > 1) return {...product, quantity: cant }
          return product
        })
      default:
        break;
    }
  }

  const [shoppingList, dispatch] = useReducer(cartReducer, initialState)


  const addProduct = (product) =>{

    product.quantity = 1

    const action = {
      type:'[CART] Add product',
      payLoad: product
    }
    dispatch(action)
  }
  const removeProduct = (id) =>{
    const action = {
      type:'[CART] Remove product',
      payLoad: id
    }
    dispatch(action)
  }
  const incrementQuantity = (id) =>{
    const action = {
      type:'[CART] Increment Quantity',
      payLoad: id
    }
    dispatch(action)
  }
  const decrementQuantity = (id) =>{
    const action = {
      type:'[CART] Decrement Quantity',
      payLoad: id
    }
    dispatch(action)
  }

 

  return (
     <CartContext.Provider value={{shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
