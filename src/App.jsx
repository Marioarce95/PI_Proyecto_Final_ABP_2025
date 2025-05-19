import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await axios.get('https://dummyjson.com/products')
        setProductos(respuesta.data.products)
        setCargando(false)
      } catch (error) {
        setError('Error al cargar los productos')
        setCargando(false)
      }
    }

    obtenerProductos()
  }, [])

  if (cargando) return <div className="text-center text-xl">Cargando...</div>
  if (error) return <div className="text-center text-red-600">{error}</div>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Lista de Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map(producto => (
          <div 
            key={producto.id} 
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex-grow">
              {producto.title}
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-green-600 font-bold text-2xl">
                ${producto.price}
              </p>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                En stock
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
