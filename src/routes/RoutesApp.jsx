import { Route, Routes } from "react-router-dom"
import Error404 from "../page/Error404"
import { Productos } from "../page/Productos"
import { Product } from "../page/product"

    export const RoutesApp = () => {
          return (
            <div>
              <Routes>
                <Route path="/" element={<Productos/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/*" element={<Error404/>}/>
              </Routes>
              </div>
          )
        }
        

        