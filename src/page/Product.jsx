import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductId } from "../helpers/getProductos";
import { Productos } from "./Productos";

export const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProductId(params.id).then((res) => setProduct(res));
  }, []);

  return (
    <main className="container mx-auto my-8">
      <div className="container mx-auto">
        <h1 className="bg-[#1F1D2B] font-bold text-center text-white text-3xl underline ">
          Pagina de Compras
        </h1>
      </div>
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/2 lg:h-full">
            <img
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src={product.image}
              alt=""
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg font-bold">
              {product.title}
            </h3>
            <span className="text-gray-500 mt-3">S/. {product.price}</span>
            <hr className="my-3" />
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Count:
              </label>
              <div className="flex items-center mt-1">  
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <span className="text-gray-700 text-lg mx-2">20</span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-3">
              <label
                className="text-gray-700 text-xl font-bold"
                htmlFor="count"
              >
                Description:
              </label>
              <p className="mt-3">{product.description}</p>
            </div>
            <div className="flex items-center mt-6">
              <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                Comprar
              </button>
              <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            </div>
            </div>
          </div>

    </main>
 );
};
