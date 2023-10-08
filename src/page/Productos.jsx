import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProductos";
import { TarjetaProductos } from "../components/TarjetaProductos";
import { CategoriaFilter } from "../components/CategoriaFilter";

export const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaFilter, setCategoriaFilter] = useState("")
  useEffect(() => {
    getProducts().then((res) => setProductos(res));
  }, []);

  const nuevaCategoria = (()=>(
    categoriaFilter === "" ? productos : productos.filter((prod) => prod.category === categoriaFilter)
  ))();

  return (
    <main className="container mx-auto">
      <h1 className="bg-[#1F1D2B] font-bold text-center text-white text-3xl underline ">PAGINA DE PRODUCTOS</h1>
       
        <CategoriaFilter setCategoriaFilter={setCategoriaFilter} />

      <section className="py-10">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
          nuevaCategoria.length !== 0 ? (
            nuevaCategoria.map((prod) => (
              <TarjetaProductos prod={prod} key={prod.id} />
            ))
          ) : (
            <div>
              <span>Cargando.......</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
