import React, { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import Swal from 'sweetalert2'//este codigo se escribe asi para importar ( leer documentacion sweetalert2---> https://sweetalert2.github.io/#download)

  

export const ProductProvider = ({children}) => {

const [products, setProducts] = useState([])

  const fetchProducts = async () =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }catch(error){
//______________________________________
      Swal.fire(// este codigo se escribe tal cual, (leer documentacion de sweetaler2---> https://sweetalert2.github.io/#download)
        {
          icon: 'error',
          title:'¡Error!',
          text: 'Hubo un problema al cargar los productos'
        }
      )
//______________________________________
      console.error(error)
    }
   

  }

  useEffect(() => {//lo usamos para que no se genere un re-render infinito por cada cambio en el useState y  hace que fetch se ejecute solo cuando el componente se monta,
    fetchProducts()
  }, [])


  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
