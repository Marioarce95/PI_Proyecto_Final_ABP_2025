import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from './components/ProductList'
import StatsPanel from './components/StatsPanel'

function App() {
  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')
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

  const productosFiltrados = busqueda
    ? productos.filter(p => p.title.toLowerCase().includes(busqueda.toLowerCase()))
    : productos

  if (cargando) return <div className="text-center text-xl">Cargando...</div>
  if (error) return <div className="text-center text-red-600">{error}</div>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Lista de Productos
      </h1>
      
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full max-w-md mx-auto block mb-8 p-2 border rounded-lg shadow-sm"
      />

      <StatsPanel productos={productosFiltrados} />
      <ProductList productos={productosFiltrados} />
    </div>
  )
}

export default App
