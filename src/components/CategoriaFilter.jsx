import { useEffect, useState } from "react"
import { getCategoria } from "../helpers/getCategoria"

export const CategoriaFilter = ({setCategoriaFilter}) => {
    const [categoria, setCategoria] = useState([])
    useEffect(() =>{
        getCategoria().then(res => setCategoria(res))
    }, [])

  return (
<div className="grid grid-cols-5 items-center py-10">
            <button className="flex items-center space-x-1.5 rounded-lg bg-slate-900 px-4 py-1.5 text-white duration-100 hover:bg-rose-400" onClick={()=>setCategoriaFilter("")}>
                Todos
            </button>
            {
                categoria.length !== 0 ? (
                    categoria.map((cat) => (
                        <button
                        className="flex items-center space-x-1.5 rounded-lg bg-slate-900 px-4 py-1.5 text-white duration-100 hover:bg-rose-400"
                        onClick={()=>setCategoriaFilter(cat)}
                        >{cat}</button>
                    ))
                ) : (
                    <div>
                        <p>Categorias Listas</p>
                    </div>
                )
            }

        </div>
  )
}


