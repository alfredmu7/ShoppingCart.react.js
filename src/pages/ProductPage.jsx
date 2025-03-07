import { useContext} from "react"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../contexts/ProductContext"
import { CartContext } from "../contexts/CartContext"


export const ProductPage = () => {

const {products} = useContext(ProductContext)
const {addProduct, removeProduct} = useContext(CartContext)

  



  return (
    <>
    <h1>Productos</h1>
    <hr />
    {products.map(product =>(
      <CardComponent
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title} 
      description={product.description}
      price={product.price}
      handlerAdd={()=> addProduct(product)}
      handlerRemove={() => removeProduct(product.id)}
      />
      ))}
    </>
  )
}
