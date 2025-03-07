import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarComponent } from "./components/NavbarComponent"
import { ProductPage } from "./pages/ProductPage"
import { CartPage } from "./pages/CartPage"
import { ProductProvider } from "./contexts/ProductProvider"
import { CartProvider } from "./contexts/CartProvider"


export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
    <NavbarComponent/>
    <div className="container">
        <Routes>{/*Routes: Contiene todas las rutas de la aplicación.*/}
            <Route path ='/' element={<ProductPage/>}></Route>{/*Route: Define una ruta específica con su path y el componente que se renderiza.- esta barra sola sera la ruta de navegacion de "compras"*/}
            <Route path ='/Carrito' element ={<CartPage/>}></Route>{/*Route: Define una ruta específica con su path y el componente que se renderiza.- esta sera la ruta de navegacion del "Carrito"*/}
            <Route path ='/*' element={<Navigate to='/'/>}></Route>{/*Route: Define una ruta específica con su path y el componente que se renderiza.- este codigo "path ='/*' element={<Navigate to='/'/>" es necesario para redirigir cualquier ruta no definida en la aplicación hacia una ruta específica, en este caso, la raíz ("/"). */}
        </Routes>
    </div>
      </CartProvider>
    </ProductProvider>
  )
}
